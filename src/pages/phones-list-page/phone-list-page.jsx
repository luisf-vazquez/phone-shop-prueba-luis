import React, { useContext } from 'react';
import { getProductList } from '../../infrastructure/api_functions/api-get-list';
import { SearchInputBox } from '../../components/search-input-box/search-input-box';
import { PhoneCard } from '../../components/phone-card/phone-card';
import { Context } from '../../context/Context';
import './phone-list-page.scss';

export function PhonesListPage() {
  const listElements = getProductList();
  const { setSelectedItemId, setBreadcrumbLevel } = useContext(Context);
  setBreadcrumbLevel('List');

  return (
    <div>
      <div className="container-flex">
        <div className="col-flex-xs-12 mb-3 ml-1 mr-1">
          <SearchInputBox newSearch={(searchText) => newSearch(searchText)} />
        </div>
      </div>
      <div className="container-flex">
        <div className="col-flex-xs-12 col-flex-sm-12 col-flex-md-12 col-flex-lg-12">
          <div className="phones-list-grid">
            {listElements.map((product) => (
              <div
                key={product.id}
                className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3"
              >
                <PhoneCard product={product} selected={(id) => setSelectedItemId(id)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonesListPage;
