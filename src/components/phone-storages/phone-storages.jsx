import React from 'react';
import './phone-storages.scss';

function renderStorage(storage, storageSelected) {
  return (
    <button
      type="button"
      className="phone-storage"
      onClick={() => {
        storageSelected(storage.code);
      }}
    >
      {storage.name}
    </button>
  );
}

export function PhoneStorages(props) {
  const { storages, storageSelected } = props;
  return (
    <div className="phone-colors-container mt-1">
      {storages?.map((storage) => renderStorage(storage, storageSelected))}
    </div>
  );
}

export default PhoneStorages;
