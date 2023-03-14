import React from 'react';
import { HEADER_EVENTS } from './app-header.const';
import './app-header.scss';

// TODO add shoppingcarticon
export function AppHeader(props) {
  const { title, srcLogo, headerOnClick } = props;
  const { SHOPPINGCART_ICON_CLICK, TITLE_CLICK, LOGO_ICON_CLICK } = HEADER_EVENTS;
  return (
    <div className="app-header container">
      <div className="logo-container cursor-pointer" onClick={() => headerOnClick(LOGO_ICON_CLICK)}>
        <img src={srcLogo} alt={`the application name is: ${title}`} />
      </div>
      <div className="title-container">
        <h1>
          <span className="cursor-pointer" onClick={() => headerOnClick(TITLE_CLICK)}>
            {title}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default AppHeader;
