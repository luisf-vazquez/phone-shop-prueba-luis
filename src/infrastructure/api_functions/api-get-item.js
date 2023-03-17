import { getWithCache } from '../api-methods/fetch-api.js';
import { PRODUCT_LIST_API_URL } from '../consts/api.consts.js';

export function getProduct(id) {
  return getWithCache(`${PRODUCT_LIST_API_URL}/${id}`);
}

export default getProduct;
