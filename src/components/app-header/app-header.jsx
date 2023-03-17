import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context.jsx';
import { HEADER_EVENTS } from './app-header.const.js';
import './app-header.scss';

export function AppHeader(props) {
  const { cartItems } = useContext(Context);
  const { title, srcShoppingcart, srcLogo, headerOnClick } = props;
  const { TITLE_CLICK, LOGO_ICON_CLICK } = HEADER_EVENTS;
  return (
    <div className="app-header container">
      <div className="logo-container cursor-pointer" onClick={() => headerOnClick(LOGO_ICON_CLICK)}>
        <img src={srcLogo} alt={`the application name is: ${title}`} loading="lazy" />
      </div>
      <div className="title-container">
        <h1>
          <span className="cursor-pointer" onClick={() => headerOnClick(TITLE_CLICK)}>
            {title}
          </span>
        </h1>
      </div>
      <div className="shoppingcart-icon">
        {cartItems ? <div className="num-products">{cartItems}</div> : null}
        <img
          src={srcShoppingcart}
          alt={`The shopping cart has ${cartItems} products`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  srcShoppingcart: PropTypes.string.isRequired,
  srcLogo: PropTypes.string.isRequired,
  headerOnClick: PropTypes.func.isRequired,
};

export default AppHeader;
