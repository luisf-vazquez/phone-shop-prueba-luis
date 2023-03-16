import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PhonePrice } from '../phone-price/phone-price';
import './phone-card.scss';

export function PhoneCard(props) {
  const { product, selected } = props;
  const { brand, model, imgUrl, id, price } = product;
  const imgSrc = imgUrl;
  const alt = `Imagen de ${model}`;

  return (
    <article className="phone-card" onClick={() => selected(id)}>
      <div className="image-container">
        <LazyLoadImage
          alt={alt}
          effect="blur"
          src={imgSrc}
          title={model}
          placeholderSrc="./spinner.gif"
        />
      </div>
      <div className="description-container">
        <div className="upper-text">
          <h5>{brand}</h5>
          <span className="text-family">{model}</span>
        </div>
        <PhonePrice price={price} />
      </div>
    </article>
  );
}

export default PhoneCard;
