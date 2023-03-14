import React from 'react';
import './dummy-phone-card.scss';

export function DummyPhoneCard() {
  return (
    <div className="dummy-phone-card">
      <div className="image-container" />
      <div className="description-container">
        <div className="dummy-text" />
        <div className="dummy-text" />
        <div className="dummy-text" />
        <div className="phone-colors-container mt-1">
          <div className="phone-color" />
          <div className="phone-color" />
          <div className="phone-color" />
          <div className="phone-color" />
        </div>
      </div>
    </div>
  );
}

export default DummyPhoneCard;
