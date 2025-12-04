/**
 * 用户服务 API
 */

import type {
  ShopLoginReq,
  ShopUserinfo,
  GenerateMFARes,
  BindMFACodeReq,
  CheckMFACodeReq,
} from './types';

import { request } from '../request';

/**
 * 商户登录
 * @param data 登录请求参数
 * @returns 返回登录token
 */
export async function shopLogin(data: ShopLoginReq) {
  return request.post<string>('/login', data, {
    doNotEncrypt: true,
    skipErrorCode: ['10217'],
    headers: {
      version: '0.0.2',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
}

/**
 * 生成MFA验证二维码
 * @returns 返回MFA验证信息，包含二维码和密钥
 */
export async function generateMFA() {
  return request.get<GenerateMFARes>('/admin/mfa/generateMFA');
}

/**
 * 查询商户用户信息
 * @returns 返回用户信息，包含双因子认证状态
 */
export async function queryShopUserinfo() {
  return request.get<ShopUserinfo>('/admin/sysuser/info');
}

/**
 * 校验MFA验证码
 * @param data 校验请求参数
 * @returns 校验结果
 */
export async function checkMFACode(data: CheckMFACodeReq) {
  return request.post<boolean>('/admin/mfa/checkMFACode', data, {
    doNotEncrypt: true,
  });
}

/**
 * 绑定MFA验证码
 * @param data 绑定请求参数
 * @returns 绑定结果
 */
export async function bindMFACode(data: BindMFACodeReq) {
  return request.post('/admin/mfa/bindMFACode', data);
}




