import React from 'react';
import './phone-colors.scss';

function renderColor(color, colorSelected) {
  const style = { backgroundColor: color };
  return (
    <div
      key={color}
      className="phone-color"
      style={style}
      onClick={() => {
        colorSelected ? colorSelected(color.code) : null;
      }}
    />
  );
}

export function PhoneColors(props) {
  const { colors, colorSelected } = props;
  return (
    <div className="phone-colors-container mt-1">
      {colors?.map((color) => renderColor(color, colorSelected))}
    </div>
  );
}

export default PhoneColors;
