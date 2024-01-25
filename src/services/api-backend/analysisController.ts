// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getInvokeCountTOPList GET /api/analysis/interface/invoke/top */
export async function getInvokeCountTopListUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceVO>('/api/analysis/interface/invoke/top', {
    method: 'GET',
    ...(options || {}),
  });
}
