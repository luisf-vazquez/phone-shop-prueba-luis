import React from 'react';
import { PhoneColors } from '../phone-colors/phone-colors';
import { PhonePrice } from '../phone-price/phone-price';
import './phone-card.scss';

export function PhoneCard(props) {
  const { product, selected } = props;
  const { brand, model, options, imgUrl, id, price } = product;
  const imgSrc = imgUrl;
  const alt = `Imagen de ${model}`;
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
        <PhoneColors colors={options?.colors} />
      </div>
    </article>
  );
}

export default PhoneCard;
