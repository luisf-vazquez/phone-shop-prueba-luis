import { getWithCache } from '../api-methods/fetch-api';
import { PRODUCT_LIST_API_URL } from '../consts/api.consts';

export function getProductList() {
  return getWithCache(PRODUCT_LIST_API_URL);
}

export default getProductList;
