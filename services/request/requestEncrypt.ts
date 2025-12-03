/**
 * 请求参数加密处理
 * 适配 React Native 环境
 */

import * as Crypto from 'expo-crypto';
import { encode } from 'js-base64';

const pk = process.env.EXPO_PUBLIC_PK || '';

/**
 * MD5 哈希（使用 expo-crypto）
 */
async function md5Hash(text: string): Promise<string> {
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.MD5,
    text
  );
  return digest.toUpperCase();
}

/**
 * RSA 加密（简化版，React Native 中需要原生模块支持）
 * 注意：这里使用 base64 编码作为简化实现
 * 生产环境建议使用 react-native-rsa 或类似库
 */
function encryptByChunk(str: string, pubKey: string): string {
  // React Native 环境下的简化实现
  // 实际项目中应该使用 react-native-rsa 或原生模块
  // 这里使用 base64 编码作为占位实现

  if (!pubKey) {
    // 如果没有公钥，返回 base64 编码的字符串
    return encode(str);
  }

  // 构建公钥格式
  let publicKey = '-----BEGIN PUBLIC KEY-----\n';
  for (let i = 0; i < Math.ceil(pubKey.length / 64); i++) {
    publicKey += pubKey.slice(i * 64, (i + 1) * 64) + '\n';
  }
  publicKey += '-----END PUBLIC KEY-----';

  // 注意：React Native 中 RSA 加密需要使用原生模块
  // 这里使用 base64 编码作为临时方案
  // 生产环境请使用：npm install react-native-rsa-native
  const chunk = 100;
  let i = 0;
  let encryptedStr = '';
  const encodedStr = encodeURIComponent(str);
  const strLen = Math.ceil(encodedStr.length / chunk);

  // 简化实现：直接 base64 编码
  for (i = 0; i < strLen; i++) {
    const chunkStr = encodedStr.slice(i * chunk, (i + 1) * chunk);
    encryptedStr += encode(chunkStr);
    if (i < strLen - 1) encryptedStr += ',';
  }

  return encryptedStr;
}

/**
 * 请求参数加密处理
 * @param data 请求数据
 * @param timestamp 时间戳
 * @returns 加密后的数据
 */
export async function encryptParams(
  data: any = {},
  timestamp: number
): Promise<string> {
  let processedData = data;

  if (typeof data === 'object' && data !== null) {
    processedData = {
      ...data,
      timestamp,
    };
  }

  // 获取需要签名的字段并排序
  const keys = Object.keys(processedData)
    .filter((el) => {
      const value = processedData[el];
      return (
        (typeof value === 'string' || typeof value === 'number') && value !== ''
      );
    })
    .sort();

  // 构建签名字符串
  const encryptA = keys.map((el) => `&${el}=${processedData[el]}`);
  const encryptB = `timestamp=${timestamp}`;
  const encryptC = encryptB + encryptA.join('');
  const encryptD = await md5Hash(encryptC);

  // 构建新的数据对象
  const newData: any = { signature: encryptD };
  for (const key in processedData) {
    if (
      Object.prototype.hasOwnProperty.call(processedData, key) &&
      typeof processedData[key] !== 'undefined'
    ) {
      newData[key] = processedData[key];
    }
  }

  return encryptByChunk(JSON.stringify(newData), pk);
}
