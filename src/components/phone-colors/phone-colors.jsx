import React from 'react';
import './phone-colors.scss';

function renderColor(color, colorSelected) {
  if (!color?.code) {
    return null;
  }
  const style = { backgroundColor: color.code };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      key={color.code}
      className="phone-color"
      style={style}
      onClick={() => {
        colorSelected ? colorSelected(color) : null;
      }}
    />
  );
}

export function PhoneColors(props) {
  const { colors, colorSelected } = props;
  return <div className="phone-colors-container mt-1">{colors.map((color) => renderColor(color, colorSelected))}</div>;
}

export default PhoneColors;
