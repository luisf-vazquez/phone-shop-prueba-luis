import { getProduct } from '../../infrastructure/api_functions/api-get-item';

export async function getProductDetails(id) {
  const details = await getProduct(id).then((val) => val);
  return details;
}

export default getProductDetails;
