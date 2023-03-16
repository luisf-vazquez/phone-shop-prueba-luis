import React from 'react';
import { PhoneColors } from '../phone-colors/phone-colors';
import { PhonePrice } from '../phone-price/phone-price';
import { getProduct } from '../../infrastructure/api_functions/api-get-item';
import './phone-card.scss';

async function getProductDetails(id) {
  const details = await getProduct(id).then((value) => value);
  return details;
}

export function PhoneCard(props) {
  const { product, selected } = props;
  const { brand, model, imgUrl, id, price } = product;
  const imgSrc = imgUrl;
  const alt = `Imagen de ${model}`;
  const productDetails = getProductDetails(id);

  return (
    <article className="phone-card" onClick={() => selected(id)}>
      <div className="image-container">
        <img src={imgSrc} alt={alt} title={model} />
      </div>
      <div className="description-container">
        <div className="upper-text">
          <h5>{brand}</h5>
          <span className="text-family">{model}</span>
        </div>
        <PhonePrice price={price} />
        <PhoneColors colors={productDetails?.colors} />
      </div>
    </article>
  );
}

export default PhoneCard;
