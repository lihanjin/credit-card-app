/**
 * 汇率服务 API
 */

import type {
  ConfirmOrderRateReq,
  ConfirmOrderRateRes,
  GetRateListReq,
  GetRateListRsp,
  GetRateOrderRangeReq,
  GetRateOrderRangeRes,
  GetRateQueryReq,
  GetRateQueryRes,
  RateConfigVo,
  StoreRateListRes,
} from './types';

import { request } from '../request';

/**
 * 查询汇率列表
 * @param data 请求参数
 * @returns 汇率列表
 */
export async function getRateList(data: GetRateListReq) {
  return request
    .get<GetRateListRsp[]>('/remittance/rate/list', {
      params: data,
    })
    .then((res) => {
      const dateList = res?.map((item) => {
        const { express, common, bigAmount, ...other } = item;
        // 汇率列表
        const rateLevel: RateConfigVo[] = [];
        // 处理所有类型的汇率
        [express, common, bigAmount].forEach((value) => {
          if (value) {
            try {
              const info = JSON.parse(value);
              if (info.status === 2) {
                rateLevel.push(info);
              }
            } catch (e) {
              console.error('解析汇率数据失败:', e);
            }
          }
        });
        const min = rateLevel[0]?.min || '0';
        const max = rateLevel[rateLevel.length - 1]?.max || '0';
        return { ...other, rateLevel, min, max };
      });
      return dateList;
    });
}

/**
 * 获取下单汇款范围
 * @returns 汇款范围
 */
export async function getRateOrderRange(data: GetRateOrderRangeReq) {
  return request.get<GetRateOrderRangeRes>('/remittance/rate/order/range', {
    params: data,
  });
}

/**
 * 查询下单汇率
 * @returns 下单汇率
 */
export async function getRateQuery(data: GetRateQueryReq) {
  return request.get<GetRateQueryRes>('/remittance/rate/query', {
    params: data,
    skipErrorCode: ['20000006', '20000051', '10000085'],
  });
}

/**
 * 确认下单汇率
 */
export async function confirmOrderRate(data: ConfirmOrderRateReq) {
  return request.get<ConfirmOrderRateRes>('/remittance/rate/confirm/order', {
    params: data,
  });
}

/**
 * 查询汇款汇率详情
 */
export async function getRateDetail(data: { pno: string }) {
  return request.get<ConfirmOrderRateRes>('/remittance/rate/detail', {
    params: data,
    skipErrorCode: ['10000087'],
  });
}

/**
 * 查询汇率接口-兑换-大屏显示
 */
export async function getStoreRateList(data: {
  unitId: string;
  companyId: number;
  payType: string;
}) {
  return request.get<StoreRateListRes>('/remittance/rate/exchange/store/list', {
    params: data,
  });
}

/**
 * 查询汇率接口-兑换-跑马灯
 */
export async function getStoreCarouselRateList(data: {
  unitId: string;
  companyId: number;
  payType: string;
}) {
  return request.get<StoreRateListRes>(
    '/remittance/rate/exchange/carousel/list',
    {
      params: data,
    }
  );
}

