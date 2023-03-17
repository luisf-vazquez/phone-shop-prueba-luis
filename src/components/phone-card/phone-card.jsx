import React from 'react';
import PropTypes from 'prop-types';
import { PhonePrice } from '../phone-price/phone-price.jsx';
import './phone-card.scss';

export function PhoneCard(props) {
  const { product, setSelectedItemIdToNavigate } = props;
  const { brand, model, imgUrl, id, price } = product;
  const imgSrc = imgUrl;
  const alt = `Imagen de ${model}`;

  return (
    <article className="phone-card" onClick={() => setSelectedItemIdToNavigate(id)}>
      <div className="image-container">
        <img alt={alt} src={imgSrc} title={model} loading="lazy" />
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

PhoneCard.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedItemIdToNavigate: PropTypes.func.isRequired,
};

export default PhoneCard;
