/**
 * 基础服务类型定义
 */

/**
 * 域名配置信息
 */
export interface DomainInfo {
  /** 域名地址 */
  domain: string;
  /** 域名唯一标识符 */
  id: number;
  /** 系统语言设置 */
  language: string;
  /** 公司/品牌名称 */
  companyName: string;
  /** RSA公钥 */
  publicKey: string;
  /** 时区偏移量（小时） */
  timezoneOffset: number;
  /** 支持的交易类型列表 */
  supportedTradeTypes: string;
}

/**
 * 营业时间配置
 */
export interface StoreHours {
  /** 开门时间 HH:mm 格式 */
  open: string;
  /** 关门时间 HH:mm 格式 */
  close: string;
}

/**
 * 店铺营业时间配置
 */
export interface StoreOpeningHours {
  /** 周一营业时间 */
  mon?: StoreHours;
  /** 周二营业时间 */
  tue?: StoreHours;
  /** 周三营业时间 */
  wed?: StoreHours;
  /** 周四营业时间 */
  thu?: StoreHours;
  /** 周五营业时间 */
  fri?: StoreHours;
  /** 周六营业时间 */
  sat?: StoreHours;
  /** 周日营业时间 */
  sun?: StoreHours;
}

/**
 * 查询店铺详情响应
 */
export interface QueryStoreDetailRes {
  /** 店铺地址 */
  storeAddress: string;
  /** 店铺英文地址 */
  storeAddressEn: string;
  /** 店铺营业时间配置（JSON 字符串） */
  storeOpeningHours: string;
  /** 店铺名称 */
  name: string;
  /** 店铺状态 */
  status: number;
  /** 解析后的营业时间 */
  openingHours?: StoreOpeningHours;
}

/**
 * 获取店铺资产请求
 */
export interface QueryStoreAccountListReq {
  /** 机构ID */
  unitId: string;
}

/**
 * 店铺资产
 */
export interface StoreAccountVo {
  /** 资产 */
  available: string;
  /** 币种 */
  currency: string;
  /** 小数位 */
  digits: number;
  /** 状态 */
  status: number;
}

/**
 * 获取店铺资产响应
 */
export interface QueryStoreAccountListRsp {
  /** 资产列表 */
  currencyDetailList: StoreAccountVo[];
}

/**
 * 数据字典项
 */
export interface DictionaryItem {
  /** 父级ID */
  parentId: number;
  /** 字典项ID */
  id: number;
  /** 字典项名称 */
  name: string;
  /** 显示名称 */
  displayName: string;
  /** 字典项编码 */
  code: string;
  /** 父级编码 */
  parentCode: string;
  /** 排序值 */
  sort: number;
  /** 状态 (1: 启用, 0: 禁用) */
  status: number;
  /** 版本号 */
  revision: number;
  /** 创建人 */
  createBy: string;
  /** 创建时间 (时间戳) */
  createTime: number;
  /** 更新人 */
  updateBy: string;
  /** 更新时间 (时间戳) */
  updateTime: number;
}

/**
 * 国家信息
 */
export interface GetCountryListRes {
  /** 国家代号 CN */
  code: string;
  /** 区号 +86 */
  countryCode: string;
  /** 名称 */
  displayName: string;
  /** 正则 */
  extend: string;
  /** 国家代号 CN */
  nationalCode: string;
  name: string;
  nameEn: string;
  nameTw: string;
}

/**
 * 获取数据字典响应类型
 */
export interface GetMapByParentCodesRes {
  /** 汇款货币 */
  remit_currency?: DictionaryItem[];
  /** 支付货币 */
  payment_currency?: DictionaryItem[];
  /** 注册来源 */
  register_source?: DictionaryItem[];
  /** 证件类型 */
  id_card_type?: DictionaryItem[];
  /** 证件签发国家 */
  document_country?: DictionaryItem[];
  /** 汇款关系 */
  remit_relation?: DictionaryItem[];
  /** 汇款意图 */
  remit_intent?: DictionaryItem[];
  /** 收入来源 */
  income_source?: DictionaryItem[];
  /** 职业类型 */
  remit_occupation?: DictionaryItem[];
  /** 客户类型 */
  customer_type?: DictionaryItem[];
  /** 兑换目的 */
  exchange_purpose?: DictionaryItem[];
  /** 资金来源 */
  funds_sources?: DictionaryItem[];
}

/**
 * 协议信息
 */
export interface TermsVO {
  /** 文件名称 */
  fileName: string;
  /** 文件类型 */
  fileType: string;
  /** 版本号 */
  fileVersion: string;
  /** 文件编号 */
  pno: string;
  /** 源文件名称 */
  resourceFileName: string;
  /** 源文件地址 */
  resourceFileUrl: string;
  /** 更新时间 */
  updateTime: string;
}

/**
 * 获取协议响应
 */
export interface GetTermsRes {
  /** 隐私协议 */
  privacyPolicy: TermsVO;
  /** 服务协议 */
  serviceAgreement: TermsVO;
}

