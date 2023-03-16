import { getWithCache } from '../api-methods/fetch-api';
import PRODUCT_LIST_API_URL from '../consts/api.consts';

export function getProduct(id) {
  return getWithCache(`${PRODUCT_LIST_API_URL}/${id}`);
}

export default getProduct;
