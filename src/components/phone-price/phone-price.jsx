import React from 'react';
import './phone-price.scss';

export function PhonePrice(props) {
  const { price } = props;
  return (
    <div className="lower-text">
      <p className="small">Desde</p>
      <h5>{price}</h5>
    </div>
  );
}

export default PhonePrice;
