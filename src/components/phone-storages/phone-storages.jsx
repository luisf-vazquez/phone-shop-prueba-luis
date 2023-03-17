import React from 'react';
import './phone-storages.scss';

let isSelected = false;
function renderStorage(storage, storageSelect, selectedStorage) {
  return (
    <button
      key={storage.code}
      type="button"
      className={'button-storage'.concat(selectedStorage === storage.code ? ' selected' : '')}
      onClick={() => {
        isSelected = !isSelected;
        if (selectedStorage === storage.code) {
          storageSelect(null);
        } else {
          storageSelect(storage.code);
        }
      }}
    >
      {storage.name}
    </button>
  );
}

export function PhoneStorages(props) {
  const { storages, storageSelect, selectedStorage } = props;
  return (
    <div className="phone-colors-container mt-1">
      {storages?.map((storage) => renderStorage(storage, storageSelect, selectedStorage))}
    </div>
  );
}

export default PhoneStorages;
