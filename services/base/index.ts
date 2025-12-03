/**
 * 基础服务 API
 */

import axios from 'axios';
import type {
  DomainInfo,
  GetCountryListRes,
  GetMapByParentCodesRes,
  GetTermsRes,
  QueryStoreAccountListReq,
  QueryStoreAccountListRsp,
  QueryStoreDetailRes,
} from './types';

import { request } from '../request';

/**
 * 获取域名信息
 * @returns 返回域名相关配置信息
 */
export async function getDomain() {
  return request.get<DomainInfo>(
    '/domain?domain=' + process.env.EXPO_PUBLIC_API_URL?.replace('https://', '')
  );
}

/**
 * 通过id查询组织机构-店铺
 */
export async function queryStoreDetail() {
  return request
    .get<QueryStoreDetailRes>('/admin/unit/queryStoreDetail')
    .then((res) => {
      const { storeOpeningHours, ...other } = res;
      const openingHours = JSON.parse(storeOpeningHours || '{}') || {};
      return { ...other, openingHours };
    });
}

/**
 * 获取店铺资产
 */
export async function queryStoreAccount(params: QueryStoreAccountListReq) {
  return request
    .get<QueryStoreAccountListRsp>('/admin/unit/queryStoreAccountList', {
      params,
    })
    .then((res) => {
      const data: Record<string, string> = {};
      res.currencyDetailList?.forEach((item) => {
        if (item.status === 2) {
          data[item.currency] = item.available;
        }
      });
      return data;
    });
}

/**
 * 上传
 */
export async function upload(data: any, type?: string) {
  return request.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data;',
      ...(type === 'application/pdf' ? { bizType: 'remittance' } : {}),
    },
    doNotEncrypt: true,
  });
}

/**
 * 获取数据字典
 * @param parentCodes 父级编码，多个用逗号分隔
 * @returns 数据字典
 */
export async function getMapByParentCodes(parentCodes: string) {
  return request.get<GetMapByParentCodesRes>(
    '/config/base/dict/getMapByParentCodes',
    {
      params: {
        parentCodes,
      },
    }
  );
}

/**
 * 获取国家列表
 * @param parentCode 父级编码，默认 -1
 * @returns 国家列表
 */
export async function getCountryList(parentCode = -1) {
  return request
    .get<GetCountryListRes[]>('/config/base/country/getListByParentCode', {
      params: {
        parentCode,
      },
    })
    .then((res) => {
      const list = res?.filter((item) => item.code !== 'other') || [];
      // 按要求排序：中国、中国香港、中国澳门、台湾、美国、英国、日本、澳大利亚、新西兰、韩国、加拿大，后续补充常见汇款国家
      const priority = [
        'CN',
        'HK',
        'MO',
        'TW',
        'US',
        'GB',
        'JP',
        'AU',
        'NZ',
        'KR',
        'CA',
        'SG',
        'MY',
        'TH',
        'PH',
        'ID',
        'VN',
      ];
      return list.sort((a, b) => {
        const indexA = priority.indexOf(a.code);
        const indexB = priority.indexOf(b.code);

        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        if (indexA !== -1) {
          return -1;
        }
        if (indexB !== -1) {
          return 1;
        }
        // 其他国家不按拼音，按英文名称排序
        return (a.nameEn || a.displayName || '').localeCompare(
          b.nameEn || b.displayName || ''
        );
      });
    });
}

/**
 * 获取最新的协议
 */
export async function getLastTerms() {
  return request.get<GetTermsRes>(
    '/remittance/fileManager/findLatestTermsServiceAgreement'
  );
}

/**
 * 获取协议html
 */
export async function getTermsHtml(url: string) {
  return axios.get<string>(url).then((res) => res.data);
}
