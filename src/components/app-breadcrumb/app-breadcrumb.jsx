import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import './app-breadcrumb.scss';

export function AppBreadcrumb(props) {
  const { goToView, breadcumbLevels } = props;
  const { breadcrumbLevel, setBreadcrumbLevel } = useContext(Context);
  const defaultBreadcumbLevels = ['List', 'Detail'];
  const currentBreadcumbLevels = breadcumbLevels || defaultBreadcumbLevels;

  function renderLevels(levels) {
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

  function renderUlContent(breadcumLevels, level) {
    const levels = [...breadcumLevels];
    levels.splice(level);
    return <>{renderLevels(levels, goToView)}</>;
  }
  return (
    <div className="app-breadcumb">
      <ul className="breadcrumb">
        {renderUlContent(currentBreadcumbLevels, breadcrumbLevel)}
        <li>{currentBreadcumbLevels[breadcrumbLevel]}</li>
      </ul>
    </div>
  );
}

export default AppBreadcrumb;
