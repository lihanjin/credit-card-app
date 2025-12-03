/**
 * 汇率相关类型定义
 */

import type { PayType } from '../order/types';

// 金额到账模式枚举
export enum AmountMode {
  /** 付款金额 */
  SOURCE_AMOUNT = 'source_amount',
  /** 目标金额 */
  TARGET_AMOUNT = 'target_amount',
}

// 汇率方向枚举
export enum Direction {
  /** 买入 */
  MULTIPLY = 'multiply',
  /** 卖出 */
  DIVIDE = 'divide',
}

// 手续费类型枚举
export enum FeeType {
  /** 固定 */
  FIX = 'fix',
  /** 百分比 */
  PERCENT = 'percent',
}

// 获取汇率列表请求
export interface GetRateListReq {
  /** 订单类型 */
  payType: PayType;
}

// 汇率列表
export interface GetRateListRsp {
  /** 付款币种 */
  currencyFrom: string;
  /** 付款币种小数位 */
  currencyFromDigits: number;
  /** 货币对信息 */
  currencyPair: string;
  /** 到账币种 */
  currencyTo: string;
  /** 到账币种小数位 */
  currencyToDigits: number;
  /** 汇率精度 */
  digits: number;
  /** 基础汇率 */
  baseRate: string;
  /** 极速汇率 */
  express: string;
  /** 通用汇率 */
  common: string;
  /** 大额汇率 */
  bigAmount: string;
  /** 零售汇率 */
  rateRetail: string;
  /** 汇率风险配置 */
  rateRiskAmount: string;
  /** 店铺汇率点差 */
  rateSpreadUnit: string;
  /** 汇率方向 */
  direction: string;
  /** 处理后的汇率层级 */
  rateLevel?: RateConfigVo[];
  /** 最小金额 */
  min?: string;
  /** 最大金额 */
  max?: string;
}

// 汇率费用配置
export interface RateConfigVo {
  /** 预计到账时间 */
  arrivalTime: string;
  /** 汇款手续费-固定值 */
  fixFee: string;
  /** 锁汇时间 */
  lockRateTime: string;
  /** 单笔限额-最大 */
  max: string;
  /** 单笔限额-最小 */
  min: string;
  /** 汇款手续费-百分比 */
  perFee: string;
  /** 退款手续费-固定值 */
  refundFixFee: string;
  /** 退款手续费-百分比 */
  refundPerFee: string;
  /** 汇款形式 */
  remittanceType: string;
  /** 状态 */
  status: number;
}

export interface GetRateOrderRangeReq {
  /** 金额 */
  amount?: number;
  /** 金额到账模式,付款金额source_amount，目标金额target_amount */
  amountMode?: string;
  /** 公司ID */
  companyId?: number;
  /** 客户编号 */
  customerNo?: string;
  /** 汇款币种 */
  fromCurrency?: string;
  /** 目标币种 */
  toCurrency?: string;
}

export interface GetRateOrderRangeRes {
  /** 汇款币种 */
  fromCurrency: string;
  /** 汇款金额最大值 */
  remittanceAmountMax: string;
  /** 汇款金额最小值 */
  remittanceAmountMin: string;
  /** 目标币种 */
  toCurrency: string;
}

// 查询下单汇率请求参数
export interface GetRateQueryReq {
  /** 金额 */
  amount?: number;
  /** 金额到账模式,付款金额source_amount，目标金额target_amount */
  amountMode?: string;
  /** 公司ID */
  companyId?: number;
  /** 客户编号 */
  customerNo?: string;
  /** 汇款币种 */
  fromCurrency?: string;
  /** 订单类型，在线汇款one_line，现金兑换cash_exchange，现金汇款cash_remittance */
  payType?: string;
  /** 目标币种 */
  toCurrency?: string;
}

// 查询下单汇率响应
export interface GetRateQueryRes {
  /** 金额到账模式 */
  amountMode: AmountMode;
  /** 汇率方向 */
  direction: string;
  /** 兑换金额-币种与汇款金额一致 */
  exchangeAmount: string;
  /** 过期时间 */
  expireTime: number;
  /** 手续费 */
  fee: string;
  /** 手续费金额-币种与汇款金额一致 */
  feeAmount: string;
  /** 手续费类型，fix=固定,precent=百分比 */
  feeType: string;
  /** 汇款金额 */
  fromAmount: string;
  /** 汇款币种 */
  fromCurrency: string;
  /** 汇款币种-小数位 */
  fromCurrencyDigits: number;
  /** 汇率 */
  rate: string;
  /** 汇率小数位 */
  rateDigits: number;
  /** 汇率流水号 */
  rateNo: string;
  /** 退款到账金额-币种与汇款金额一致 */
  refundAmount: string;
  /** 退款手续费 */
  refundFeeAmount: string;
  /** 汇款金额最大值 */
  remittanceAmountMax: string;
  /** 汇款金额最小值 */
  remittanceAmountMin: string;
  /** 目标金额 */
  toAmount: string;
  /** 目标币种 */
  toCurrency: string;
  /** 目标币种-小数位 */
  toCurrencyDigits: number;
}

// 确认下单汇率请求参数
export interface ConfirmOrderRateReq {
  /** 金额 */
  amount?: number | string;
  /** 金额到账模式 */
  amountMode?: AmountMode;
  /** 公司ID */
  companyId?: number;
  /** 客户编号 */
  customerNo?: string;
  /** 汇款币种 */
  fromCurrency?: string;
  /** 汇率编号 */
  rateNo?: string;
  /** 目标币种 */
  toCurrency?: string;
  /** 订单类型 */
  payType: PayType;
}

// 确认下单汇率响应
export interface ConfirmOrderRateRes {
  /** 金额到账模式 */
  amountMode: AmountMode;
  /** 付款币种 */
  currencyFrom: string;
  /** 汇率方向 */
  direction: Direction;
  /** 兑换金额-币种与汇款金额一致 */
  exchangeAmount: string;
  /** 过期时间 */
  expireTime: number;
  /** 手续费 */
  fee: string;
  /** 手续费金额-币种与汇款金额一致 */
  feeAmount: string;
  /** 手续费类型 */
  feeType: FeeType;
  /** 汇款金额 */
  fromAmount: string;
  /** 汇款币种 */
  fromCurrency: string;
  /** 汇款币种-小数位 */
  fromCurrencyDigits: number;
  /** 汇率 */
  rate: string;
  /** 汇率是否变化 */
  rateChange: boolean;
  /** 汇率小数位 */
  rateDigits: number;
  /** 汇率流水号 */
  rateNo: string;
  /** 退款到账金额 */
  refundAmount: string;
  /** 退款手续费 */
  refundFeeAmount: string;
  /** 汇款金额最大值 */
  remittanceAmountMax: string;
  /** 汇款金额最小值 */
  remittanceAmountMin: string;
  /** 目标金额 */
  toAmount: string;
  /** 目标币种 */
  toCurrency: string;
  /** 目标币种-小数位 */
  toCurrencyDigits: number;
}

export interface StoreRateListRes {
  /** 店铺英文地址 */
  storeAddressEn: string;
  /** 店铺地址 */
  storeAddress: string;
  /** 汇率更新时间 */
  updateRateTime: string;
  /** whatsapp */
  whatsapp: string;
  /** whatapp二维码地址 */
  whatsappQrCode: string;
  /** 联系人邮箱 */
  contactEmail: string;
  rateList: {
    /** 买入汇率 */
    buyRate: string;
    /** 付款币种 */
    currencyFrom: string;
    /** 到账币种 */
    currencyTo: string;
    /** 汇率是否异常 */
    rateError: boolean;
    /** 汇率异常信息 */
    rateErrorMsg: string;
    /** 卖出汇率 */
    sellRate: string;
    /** 汇率更新时间（生成） */
    updateTime: string;
    currency: string;
  }[];
}

