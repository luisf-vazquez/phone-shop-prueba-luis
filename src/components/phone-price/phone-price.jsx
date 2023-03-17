import React from 'react';
import './phone-price.scss';

export function PhonePrice(props) {
  const { price, big } = props;
  function renderSmall() {
    return (
      <div>
        <p className="small">Precio</p>
        <h5>{price ? `${price}€` : 'Consultar cuota'}</h5>
      </div>
    );
  }

  function renderBig() {
    return (
      <div className="price-big-container">
        <h2 className="price-big-label">Precio</h2>
        <h2 className="price-big-label">{price ? `${price}€` : 'Consultar cuota'}</h2>
      </div>
    );
  }

  return big ? renderBig() : renderSmall();
}

export default PhonePrice;
