import React from 'react';
import './phone-storages.scss';

function renderStorage(storage, storageSelect, selectedStorage) {
  return (
    <button
      key={storage.code}
      type="button"
      className={'phone-storage'.concat(selectedStorage === storage.code ? ' selected' : '')}
      onClick={() => {
        storageSelect(storage.code);
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
