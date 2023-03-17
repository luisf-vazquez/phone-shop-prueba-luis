import React, { useContext, useState } from 'react';
import { getProductList } from '../../infrastructure/api_functions/api-get-list.js';
import { SearchInputBox } from '../../components/search-input-box/search-input-box.jsx';
import { PhoneCard } from '../../components/phone-card/phone-card.jsx';
import { Context } from '../../context/Context.jsx';
import './phone-list-page.scss';

const listElements = await getProductList().then((value) => value);
export function PhonesListPage() {
  const [list, setList] = useState(listElements);

  const { setSelectedItemId, setBreadcrumbLevel } = useContext(Context);

  function setListBreadCrumbLevel() {
    setBreadcrumbLevel('List');
  }
  setListBreadCrumbLevel();

  const newSearch = (searchText) => {
    if (searchText && searchText !== '') {
      const lowerCaseSearchText = searchText.toLowerCase();
      const newList = listElements.filter((product) => {
        const brand = product.brand.toLowerCase();
        const model = product.model.toLowerCase();
        return (
          brand.startsWith(lowerCaseSearchText) ||
          brand === lowerCaseSearchText ||
          model.startsWith(lowerCaseSearchText) ||
          model === lowerCaseSearchText
        );
      });
      setList(newList);
    } else {
      setList(listElements);
    }
  };

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
            {list && list.length !== 0 ? (
              list?.map((product) => (
                <div
                  key={product.id}
                  className="col-flex-xs-6 col-flex-sm-6 col-flex-md-4 col-flex-lg-3"
                >
                  <PhoneCard
                    product={product}
                    setSelectedItemIdToNavigate={(id) => setSelectedItemId(id)}
                  />
                </div>
              ))
            ) : (
              <h1>Sin resultados para la búsqueda</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonesListPage;
