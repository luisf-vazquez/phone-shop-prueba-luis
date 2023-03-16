import React from 'react';
import './phone-colors.scss';

function renderColor(color, colorSelect, selectedColor) {
  const style = { backgroundColor: color.name };
  return (
    <button
      type="button"
      key={color.code}
      className={'button-container'.concat(selectedColor === color.code ? ' button-selected' : '')}
      style={style}
      onClick={() => {
        colorSelect ? colorSelect(color.code) : null;
      }}
    >
      <div key={color.code} className="phone-color" style={style} />
    </button>
  );
}

export function PhoneColors(props) {
  const { colors, colorSelect, selectedColor } = props;
  return (
    <div className="phone-colors-container mt-1">
      {colors?.map((color) => renderColor(color, colorSelect, selectedColor))}
    </div>
  );
}

export default PhoneColors;
