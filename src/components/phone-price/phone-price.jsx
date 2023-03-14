import React from 'react';
import { getCheapestPrice } from '../../tools/price/price.tools';
import './phone-price.scss';

export function PhonePrice(props) {
  const { price } = props;
  return (
    <div className="lower-text">
      <p className="small">Desde</p>
      <h5>{getCheapestPrice(price)}</h5>
    </div>
  );
}

export default PhonePrice;
