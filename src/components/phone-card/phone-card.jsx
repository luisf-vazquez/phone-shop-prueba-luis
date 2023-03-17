import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PhonePrice } from '../phone-price/phone-price';
import './phone-card.scss';

export function PhoneCard(props) {
  const { product, setSelectedItemIdToNavigate } = props;
  const { brand, model, imgUrl, id, price } = product;
  const imgSrc = imgUrl;
  const alt = `Imagen de ${model}`;

  return (
    <article className="phone-card" onClick={() => setSelectedItemIdToNavigate(id)}>
      <div className="image-container">
        <img alt={alt} src={imgSrc} title={model} loading="lazy"></img>
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

PhoneCard.PropTypes = {
  product: PropTypes.object.isRequired,
  setSelectedItemIdToNavigate: PropTypes.func.isRequired,
};

export default PhoneCard;
