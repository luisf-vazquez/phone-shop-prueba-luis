import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import './app-breadcrumb.scss';

const { breadcrumbLevel, setBreadcrumbLevel } = useContext(Context);

function renderLevels(levels, goToView) {
  return levels.map((bread) => (
    <li key={bread}>
      <button
        type="submit"
        onClick={() => {
          setBreadcrumbLevel(bread);
          goToView(bread);
        }}
      >
        {bread}
      </button>
    </li>
  ));
}

function renderUlContent(breadcumLevels, level, goToView) {
  const levels = [...breadcumLevels];
  levels.splice(level);
  return <>{renderLevels(levels, goToView)}</>;
}

const defaultBreadcumbLevels = ['List', 'Detail'];

export function AppBreadcrumb(props) {
  const { goToView, breadcumbLevels } = props;
  const currentBreadcumbLevels = breadcumbLevels || defaultBreadcumbLevels;
  return (
    <div className="app-breadcumb">
      <ul className="breadcrumb">
        {renderUlContent(currentBreadcumbLevels, breadcrumbLevel, goToView)}
        <li>{breadcumbLevels[breadcrumbLevel]}</li>
      </ul>
    </div>
  );
}

export default AppBreadcrumb;
