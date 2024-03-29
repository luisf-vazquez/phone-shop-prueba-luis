import React from 'react';
import PropTypes from 'prop-types';
import './phone-storages.scss';

let isSelected = false;
function renderStorage(storage, selectStorage, selectedStorage) {
  return (
    <button
      key={storage.code}
      type="button"
      className={'button-storage'.concat(selectedStorage === storage.code ? ' selected' : '')}
      onClick={() => {
        isSelected = !isSelected;
        if (selectedStorage === storage.code) {
          selectStorage(null);
        } else {
          selectStorage(storage.code);
        }
      }}
    >
      {storage.name}
    </button>
  );
}

export function PhoneStorages(props) {
  const { storages, selectStorage, selectedStorage } = props;
  return (
    <div className="phone-colors-container mt-1">
      {storages?.map((storage) => renderStorage(storage, selectStorage, selectedStorage))}
    </div>
  );
}

PhoneStorages.propTypes = {
  storages: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired, code: PropTypes.number.isrequired }),
  ).isRequired,
  selectStorage: PropTypes.func.isRequired,
  selectedStorage: PropTypes.string.isRequired,
};

export default PhoneStorages;
