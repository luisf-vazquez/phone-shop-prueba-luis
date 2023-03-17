import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/Context.jsx';
import './app-breadcrumb.scss';

export function AppBreadcrumb(props) {
  const { goToView } = props;
  const { breadcrumbLevel, setBreadcrumbLevel } = useContext(Context);
  const defaultBreadcumbLevels = ['List', 'Detail'];
  const currentBreadcumbLevels = defaultBreadcumbLevels;

  function renderLevels(levels) {
    return levels.map((bread) => {
      if (bread !== breadcrumbLevel) {
        return (
          <li key={bread}>
            <button
              type="button"
              onClick={() => {
                setBreadcrumbLevel(bread);
                goToView(bread);
              }}
            >
              {bread}
            </button>
          </li>
        );
      }
      return <li key={bread}>{bread}</li>;
    });
  }

  function renderUlContent(breadcumLevels) {
    const levels = [...breadcumLevels];
    const level = breadcrumbLevel === 'List' ? 1 : 2;
    levels.splice(level, 1);
    return <>{renderLevels(levels)}</>;
  }

  return (
    <div className="app-breadcumb">
      <ul className="breadcrumb">
        {renderUlContent(currentBreadcumbLevels)}
        <li>{currentBreadcumbLevels[breadcrumbLevel]}</li>
      </ul>
    </div>
  );
}

AppBreadcrumb.propTypes = {
  goToView: PropTypes.func.isRequired,
};

export default AppBreadcrumb;
