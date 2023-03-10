import { postCall } from '../api-methods/post-api';
import CART_API_URL from '../consts/api.consts';

export function postProduct(id, colorCode, storageCode) {
  const body = {
    id,
    colorCode,
    storageCode,
  };
  return postCall(CART_API_URL, body);
}

export default postProduct;
