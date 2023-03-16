import React from 'react';
import './phone-price.scss';

export function PhonePrice(props) {
  const { price } = props;
  return (
    <div className="lower-text">
      <p className="small">Precio</p>
      <h5>{price ? `${price}€` : 'Consultar cuota'}</h5>
    </div>
  );
}

export default PhonePrice;
