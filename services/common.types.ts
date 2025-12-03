/**
 * 通用类型定义
 */

/**
 * 分页请求参数
 */
export interface PaginationReq {
  /** 当前页码 */
  current: number;
  /** 每页条数 */
  size: number;
}

/**
 * 分页请求结果
 */
export interface PaginationRes<T> {
  /** 总记录数 */
  total: number;
  /** 当前页条数 */
  size: number;
  /** 当前页码 */
  current: number;
  /** 数据列表 */
  list: T[];
  /** 记录列表（兼容字段） */
  records: T[];
}

/**
 * API 响应基础结构
 */
export interface ApiResponse<T = any> {
  /** 响应码 */
  code: string | number;
  /** 响应消息 */
  msg: string;
  /** 响应数据 */
  data: T;
}

/**
 * 文件下载响应类型
 */
export type DownloadFileRes = {
  /** 文件名 */
  data: string;
  /** 错误信息 */
  msg: string;
}[];

