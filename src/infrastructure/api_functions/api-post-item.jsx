import { postCall } from '../api-methods/post-api';
import { CART_API_URL } from '../consts/api.consts';

export function postProduct(body) {
  return postCall(CART_API_URL, JSON.stringify(body));
}

export default postProduct;
