import React from 'react';
import PropTypes from 'prop-types';
import './phone-colors.scss';

function renderColor(color, selectColor, selectedColor) {
  const style = { backgroundColor: color.name };
  return (
    <button
      type="button"
      key={color.code}
      className={'button-container'.concat(selectedColor === color.code ? ' button-selected' : '')}
      style={style}
      onClick={() => {
        selectColor(color.code);
      }}
    >
      <div key={color.code} className="phone-color" style={style} />
    </button>
  );
}

export function PhoneColors(props) {
  const { colors, selectColor, selectedColor } = props;
  return (
    <div className="phone-colors-container mt-1">
      {colors?.map((color) => renderColor(color, selectColor, selectedColor))}
    </div>
  );
}

PhoneColors.PropTypes = {
  colors: PropTypes.array.isRequired,
  selectColor: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
};

export default PhoneColors;
