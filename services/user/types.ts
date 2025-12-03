/**
 * 用户相关类型定义
 */

/**
 * 商户登录请求参数
 */
export interface ShopLoginReq {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 登录类型 */
  type: string;
  /** 语言设置 */
  lang: string;
  /** 公司ID */
  companyId: number;
  /** 双因子验证码 */
  twoFactorCode?: string;
  /** 双因子验证码 */
  code?: string;
}

/**
 * 生成MFA验证响应数据
 */
export interface GenerateMFARes {
  /** MFA记录ID */
  id: number;
  /** 状态码 */
  status: number;
  /** 创建者 */
  createBy: string;
  /** 更新者 */
  updateBy: string;
  /** 公司ID */
  companyId: number;
  /** 用户名 */
  username: string;
  /** MFA密钥 */
  secret: string;
  /** 二维码链接 */
  qrcode: string;
  /** 业务名称 */
  bizName: string;
  /** 字符串ID */
  strId: string;
}

/**
 * 商户用户信息
 */
export interface ShopUserinfo {
  /** 用户双因子认证状态 0-未启用 1-已启用 */
  twoFactor: 0 | 1;
  /** 系统角色信息 */
  sysRole: {
    /** 角色双因子认证要求 0-不要求 1-要求 */
    twoFactor: 0 | 1;
    /** 店铺id，多个逗号连接 */
    storeUnitId: number;
    /** 现场人员0-否 1-是 */
    onsiteStaff: 0 | 1;
    /** 是否店员 */
    roleType: number;
  };
  /** 白标机构ID */
  unitId: number;
}

/**
 * 校验MFA验证码请求参数
 */
export interface CheckMFACodeReq {
  /** 验证码 */
  code: string;
  /** 公司ID */
  companyId: number;
  /** 用户密码 */
  password: string;
  /** 用户名 */
  username: string;
}

/**
 * 绑定MFA验证码请求参数
 */
export interface BindMFACodeReq {
  /** 验证码 */
  code: string;
  /** 公司ID */
  companyId: number;
  /** 用户密码 */
  password: string;
  /** 用户名 */
  username: string;
}

