import React from 'react';
import './app-breadcrumb.scss';

function renderLevels(levels, goToView) {
  return levels.map((bread) => (
    <li key={bread}>
      <a onClick={() => goToView(bread)}>{bread}</a>
    </li>
  ));
}

function renderUlContent(breadcumLevels, level, goToView) {
  const levels = [...breadcumLevels];
  levels.splice(level);
  return <>{renderLevels(levels, goToView)}</>;
}

export const defaultBreadcumbLevels = ['Search', 'Detail', 'Shoppingcart'];

export function AppBreadcumb(props) {
  const { level, goToView, breadcumbLevels } = props;
  const currentBreadcumbLevels = breadcumbLevels || defaultBreadcumbLevels;
  return (
    <div className="app-breadcumb">
      <ul className="breadcrumb">
        {renderUlContent(currentBreadcumbLevels, level, goToView)}
        <li>{breadcumbLevels[level]}</li>
      </ul>
    </div>
  );
}

export default AppBreadcumb;
