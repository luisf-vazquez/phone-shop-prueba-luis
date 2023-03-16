import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { AppHeader } from './components/app-header/app-header';
// import { AppBreadcrumb } from './components/app-breadcrumb/app-breadcrumb';
import { HEADER_EVENTS } from './components/app-header/app-header.const';
import { Context } from './context/Context';
import { getProductDetails } from './tools/fetch-tools/fetch-tools';
import './App.scss';

const PhonesListPage = React.lazy(() => import('./pages/phones-list-page/phone-list-page'));
const PhoneDetailsPage = React.lazy(() => import('./pages/phones-details-page/phone-details-page'));
const AppHeader = React.lazy(() => import('./components/app-header/app-header'));
const AppBreadcrumb = React.lazy(() => import('./components/app-breadcrumb/app-breadcrumb'));

export function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState('List');
  const [itemId, setItemId] = useState('');
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  function headerOnClick(event) {
    switch (event) {
      case HEADER_EVENTS.LOGO_ICON_CLICK:
      case HEADER_EVENTS.TITLE_CLICK:
        setItemId('');
        navigate('/');
        break;

      default:
        break;
    }
  }

  function breadcrumbOnClick(bread) {
    switch (bread) {
      case 'List':
        setItemId('');
        navigate('/');
        break;
      default:
        break;
    }
  }

  const value = useMemo(
    () => ({
      cartItems: count,
      addItem: (newCount) => setCount(newCount),
      breadcrumbLevel: level,
      setBreadcrumbLevel: (newLevel) => setLevel(newLevel),
      selectedItemId: itemId,
      setSelectedItemId: (newitemId) => setItemId(newitemId),
      selectedProduct: product,
    }),
    [count, level, itemId, product],
  );

  useEffect(() => {
    if (itemId && itemId !== '') {
      getProductDetails(itemId).then((val) => {
        setProduct(val);
        navigate(`/phone-detail/${itemId}`);
      });
    } else {
      setProduct({});
      navigate('/');
    }
  }, [itemId]);

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="waiting-spinner">
            <img src="/spinner.gif" alt="loading ..." />
          </div>
        }
      >
        <Context.Provider value={value}>
          <AppHeader
            title="The Fon shop"
            srcLogo="/logo.png"
            srcShoppingcart="/shoppingcart.svg"
            headerOnClick={(event) => headerOnClick(event)}
          />
          <AppBreadcrumb goToView={(bread) => breadcrumbOnClick(bread)} />

          <div className="app container mt-4">
            <div className="app-content">
              <div className="app container">
                <Routes>
                  <Route path="/" element={<PhonesListPage />} />
                  <Route path="/phone-detail/:itemId" element={<PhoneDetailsPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </Context.Provider>
      </Suspense>
    </div>
  );
}

export default App;
