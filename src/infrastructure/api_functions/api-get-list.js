import { getWithCache } from '../api-methods/fetch-api.js';
import { PRODUCT_LIST_API_URL } from '../consts/api.consts.js';

export function getProductList() {
  return getWithCache(PRODUCT_LIST_API_URL);
}

export default getProductList;
