import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context.jsx';
import { PhoneColors } from '../../components/phone-colors/phone-colors.jsx';
import { PhoneStorages } from '../../components/phone-storages/phone-storages.jsx';
import { PhonePrice } from '../../components/phone-price/phone-price.jsx';
import { postProduct } from '../../infrastructure/api_functions/api-post-item.js';
import './phone-details-page.scss';

export function PhoneDetailsPage() {
  const { addItem, setBreadcrumbLevel, setSelectedItemId, selectedProduct } = useContext(Context);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const productDetails = selectedProduct;
  const {
    id,
    imgUrl,
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    displaySize,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
    options,
  } = productDetails;

  setBreadcrumbLevel('Detail');

  async function AddToCart() {
    if (selectedColor && selectedColor !== '' && selectedStorage && selectedStorage !== '') {
      const body = {
        id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      };
      const itemCount = await postProduct(body).then((value) => value.count);
      addItem(itemCount);
      setSelectedColor(null);
      setSelectedStorage(null);
      setSelectedItemId(null);
    }
  }

  return (
    <article className="phone-detail-view">
      <div className="container-flex">
        <div className="col-flex-xs-12 col-flex-sm-4 col-flex-md-4 col-flex-lg-3">
          <div className="image-container col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
            <img src={imgUrl} alt={`${brand} ${model}`} title={model} loading="lazy" />
          </div>
          <PhonePrice price={price} big />
          <div className="carrito-container col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
            <button
              type="button"
              disabled={!selectedColor || !selectedStorage}
              onClick={AddToCart}
              className="button-carrito"
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
        <div className="description-container col-flex-xs-12 col-flex-sm-8 col-flex-md-8 col-flex-lg-9">
          <div className="upper-text">
            <h2 className="mb-3 mt-2">{model}</h2>
          </div>
          <div className="phone-characteristics">
            <dl>
              <dt>Marca</dt>
              <dd>{brand}</dd>
            </dl>
            <dl>
              <dt>Modelo</dt>
              <dd>{model}</dd>
            </dl>
            <dl>
              <dt>CPU</dt>
              <dd>{cpu}</dd>
            </dl>
            <dl>
              <dt>RAM</dt>
              <dd>{ram}</dd>
            </dl>
            <dl>
              <dt>Sistema Operativo</dt>
              <dd>{os}</dd>
            </dl>
            <dl>
              <dt>Resolución de pantalla</dt>
              <dd>
                {displayResolution}
                {displaySize}
              </dd>
            </dl>
            <dl>
              <dt>Batería</dt>
              <dd>{battery}</dd>
            </dl>
            <dl>
              <dt>Cámara principal</dt>
              <dd>{primaryCamera}</dd>
            </dl>
            <dl>
              <dt>Cámara secundaria</dt>
              <dd>{secondaryCmera}</dd>
            </dl>
            <dl>
              <dt>Dimensiones</dt>
              <dd>{dimentions}</dd>
            </dl>
            <dl>
              <dt>Peso</dt>
              <dd>{weight}</dd>
            </dl>
          </div>
          <div className="color-selector">
            <div className="color-selector-text">Selecciona un color</div>
            <div className="color-selector-options">
              <PhoneColors
                colors={options?.colors}
                selectColor={(colorOption) => setSelectedColor(colorOption)}
                selectedColor={selectedColor}
              />
            </div>
          </div>
          <div className="storage-selector">
            <div className="storage-selector-text">Selecciona una capacidad de memoria</div>
            <div className="storage-selector-options">
              <PhoneStorages
                storages={options?.storages}
                selectStorage={(storageOption) => setSelectedStorage(storageOption)}
                selectedStorage={selectedStorage}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PhoneDetailsPage;
