/**
 * 订单相关类型定义
 */

// 订单类型枚举
export enum PayType {
  /** 在线汇款 */
  ONE_LINE = 'one_line',
  /** 现金兑换 */
  CASH_EXCHANGE = 'cash_exchange',
  /** 现金汇款 */
  CASH_REMITTANCE = 'cash_remittance',
}

// 汇款形式枚举
export enum RemittanceType {
  /** 现金汇款 */
  CASH = 'cash',
  /** 银行转账 */
  BANK_TRANSFER = 'bank_transfer',
  /** 在线汇款 */
  ONLINE = 'online',
}

// 订单状态枚举
export enum OrderStatus {
  /** 进行中 */
  IN_PROGRESS = 0,
  /** 已完成 */
  COMPLETED = 1,
  /** 已超时 */
  TIMEOUT = 2,
  /** 已取消 */
  CANCELLED = 3,
}

// 订单显示状态枚举
export enum OrderStatusShow {
  /** 待审核 */
  PENDING_REVIEW = 1,
  /** 取消待确认 */
  CANCEL_PENDING = 2,
  /** 待收款 */
  PENDING_PAYMENT = 3,
  /** 修改/补充资料 */
  MODIFY_SUPPLEMENT = 4,
  /** 已收款 */
  PAYMENT_RECEIVED = 5,
  /** 已取消 */
  CANCELLED = 6,
  /** 订单已超时 */
  TIMEOUT = 7,
  /** 审核失败 */
  REVIEW_FAILED = 8,
}

// 退款状态枚举
export enum RefundStatus {
  /** 待退款 */
  PENDING = 1,
  /** 退款成功 */
  SUCCESS = 2,
  /** 无需退款 */
  NO_REFUND = 3,
}

// 签署类型
export enum ActionType {
  /** 确认订单 */
  EXCHANGE = 1,
  /** 确认收款 */
  CONFIRM = 2,
  /** 确认取消 */
  CANCEL = 3,
}

// 查询汇款金额风险请求参数
export interface QueryRemittanceAmountRiskReq {
  /** 证件类型，identity_card身份证 */
  documentType?: string;
  /** 证件号码 */
  idCardNumber?: string;
  /** 汇率流水号 */
  rateNo?: string;
  /** 金额 */
  amount?: string;
}

// 文件详情
export interface FileDetail {
  /** 具体文件 */
  fileKey: string;
  /** 是否启用2启用 */
  status: number;
}

// 查询汇款金额风险响应
export interface QueryRemittanceAmountRiskRes {
  /** 总金额是否超过上限 */
  allAmount?: boolean;
  /** 补充文件列表 */
  fileList: FileDetail[];
  /** 是否通过,true不通过 */
  show: boolean;
  /** 单笔金额是否超过上限 */
  singleAmount?: boolean;
}

export interface CashExchangeOrderDto {
  /** 证件反面图片 */
  backImage?: string;
  /** 证件类型，identity_card身份证 */
  documentType: string;
  /** 证件正面图片 */
  frontImage: string;
  /** 证件签发国家 */
  idCardCountry: string;
  /** 证件号码 */
  idCardNumber: string;
  /** 姓名 */
  name: string;
  /** 手机号码 */
  phone?: string;
  /** 手机区号 */
  phoneArea?: string;
  /** 客户补充的资料 */
  extendFile?: string;
  /** 签名 */
  sign?: string;
}

/**
 * 下单请求参数
 */
export interface AddOrderReq {
  /** 汇率流水号 */
  rateNo: string;
  /** 汇款人信息 */
  remittanceInfo: CashExchangeOrderDto;
  /** 隐私协议提案号 */
  privacyPolicyPno?: string;
  /** 服务协议提案号 */
  serviceAgreementPno?: string;
}

/**
 * 订单详情
 */
export interface OrderVo {
  /** 订单ID */
  id: number;
  /** 提案号 */
  pno: string;
  /** 汇款金额 */
  fromAmount: string;
  /** 汇款币种 */
  fromCurrency: string;
  /** 手续费币种 */
  feeAmount: string;
  /** 汇款金额 */
  toAmount: string;
  /** 汇款币种 */
  toCurrency: string;
  /** 汇率 */
  rate: string;
  /** 等额港币 */
  amountHkd: string;
  /** 汇率ID */
  rateId: number;
  /** 汇率流水号 */
  rateNo: string;
  /** 汇款目的 */
  purposeOfRemittance: string;
  /** 订单状态 */
  status: OrderStatus;
  /** 订单显示状态 */
  statusShow: OrderStatusShow;
  /** 累计交易额-港币 */
  accrueAmount: string;
  /** 创建人 */
  createBy: string;
  /** 创建时间 */
  createTime: string;
  /** 过期时间 */
  orderExpireTime: number;
  /** 审核时间 */
  approverTime: number;
  /** 审核备注 */
  approverRemark: string;
  /** 汇款状态 */
  remittanceStatus: number;
  /** 汇款备注 */
  remark: string;
  /** 取消备注 */
  cancelRemark: string;
  /** 取消状态 */
  cancelStatus: number;
  /** 取消时间 */
  cancelTime: number;
  /** 取消订单审核备注 */
  processCancelRemark: string;
  /** 审核订单取消时间 */
  processCancelTime: number;
  /** 汇款详情 */
  remittanceDetail?: string;
  /** 汇率详情 */
  rateDetail?: string;
  /** 客户补充的资料 */
  extendFile?: string;
  /** 确认或取消收款文件-确认订单 */
  confirmRemittanceFile?: string;
  /** 订单收据 */
  orderReceipt: string;
  /** 退款提案号 */
  refundPno: string;
  /** 退款到账金额 */
  refundAmount: string;
  /** 退款手续费 */
  refundFeeAmount: string;
  /** 退款状态 */
  refundStatus: number;
  /** 退款完成时间 */
  refundFinishTime: number;
}

/**
 * 查询退款信息
 */
export interface RefundDetailRsp {
  /** 提案号 */
  pno: string;
  /** 退款标志 */
  cancelFeePno: string;
  /** 退款到账金额 */
  refundAmount: string;
  /** 退款手续费 */
  refundFeeAmount: string;
}

export interface ConfirmOrderReq {
  /** 提案号 */
  pno: string;
  /** 签名 */
  sign: string;
  /** 证件国家 */
  idCardCountryShow?: string;
  /** 证件类型文案 */
  documentTypeShow?: string;
  /** 退款标志 */
  refund?: string;
  /** 取消订单费用流水号 */
  cancelFeePno?: string;
  /** 退款备注 */
  remark?: string;
  /** 是否需要退款手续费 */
  waivedFee?: 'yes' | 'no';
}

export interface GetKycReq {
  /** 汇率提案号 */
  rateNo: string;
  /** 证件类型，identity_card身份证 */
  documentType: string;
  /** 证件号码*/
  idCardNumber: string;
}

export interface KycInfo {
  elementList: {
    elementCode: string;
    elementValue: string;
  }[];
}

export interface GetKycRsp {
  /** 近一年交易额 */
  hkdAmount: string;
  /** kyc信息 */
  kycInfo: KycInfo;
}

export interface UpdateOrderReq {
  /** 提案号 */
  pno: string;
  /** 修改信息 */
  updateOrderDetail: CashExchangeOrderDto;
  /** 隐私协议提案号 */
  privacyPolicyPno?: string;
  /** 服务协议提案号 */
  serviceAgreementPno?: string;
}
