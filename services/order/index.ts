/**
 * 订单服务 API
 */

import type {
  AddOrderReq,
  ConfirmOrderReq,
  GetKycReq,
  GetKycRsp,
  OrderVo,
  QueryRemittanceAmountRiskReq,
  QueryRemittanceAmountRiskRes,
  RefundDetailRsp,
  UpdateOrderReq,
} from './types';

import { request } from '../request';

/**
 * 查询单笔或总额是否超限
 */
export async function queryRemittanceAmountRisk(
  data: QueryRemittanceAmountRiskReq
) {
  return request.get<QueryRemittanceAmountRiskRes>(
    '/remittance/store/cashExchange/queryRemittanceAmountRisk',
    {
      params: data,
    }
  );
}

/**
 * 下单
 */
export async function addOrder(data: AddOrderReq) {
  return request.post('/remittance/store/cashExchange/addOrder', data, {
    skipErrorCode: ['10000087'],
  });
}

/**
 * 查询店员待处理订单
 */
export async function queryPendingOrderDetail() {
  return request.get<OrderVo>(
    '/remittance/store/cashExchange/queryPendingOrderDetail'
  );
}

/**
 * 根据提案号查询订单详情
 */
export async function getOrderDetailByPno(pno: string) {
  return request.get<OrderVo>('/remittance/store/cashExchange/detail', {
    params: { pno },
  });
}

/**
 * 根据提案号查询退款订单详情
 */
export async function getOrderRefundDetail(pno: string) {
  return request.get<RefundDetailRsp>(
    '/remittance/store/cashExchange/queryOrderRefundDetail',
    {
      params: { pno },
    }
  );
}

/**
 * 取消订单
 */
export async function cancelOrder(data: ConfirmOrderReq) {
  return request.post('/remittance/store/cashExchange/cancelOrder', data);
}

/**
 * 确认收款
 */
export async function confirmPayment(data: ConfirmOrderReq) {
  return request.post('/remittance/store/cashExchange/confirmPayment', data);
}

/**
 * 确认取消
 */
export async function confirmCancelOrder(data: ConfirmOrderReq) {
  return request.post('/remittance/store/cashExchange/confirmCancel', data);
}

/**
 * 获取汇款人最新KYC详情
 */
export async function getCashExchangeRemittanceKyc(data: GetKycReq) {
  return request.get<GetKycRsp>(
    '/remittance/store/cashExchange/remittance/kyc',
    {
      params: data,
      skipCatchSpecialErrors: true,
    }
  );
}

/**
 * 修改订单资料
 */
export async function updateOrder(data: UpdateOrderReq) {
  return request.post('/remittance/store/cashExchange/update', data);
}

