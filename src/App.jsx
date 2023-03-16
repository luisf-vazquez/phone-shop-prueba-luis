import React, { useState, useMemo, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppHeader } from './components/app-header/app-header';
import { AppBreadcrumb } from './components/app-breadcrumb/app-breadcrumb';
import { HEADER_EVENTS } from './components/app-header/app-header.const';
import { Context } from './context/Context';
import { PhonesListPage } from './pages/phones-list-page/phone-list-page';
import { PhoneDetailsPage } from './pages/phones-details-page/phone-details-page';
import './App.scss';

export function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState('List');
  const [itemId, setItemId] = useState('');
  const navigate = useNavigate();

  function headerOnClick(event) {
    switch (event) {
      case HEADER_EVENTS.LOGO_ICON_CLICK:
      case HEADER_EVENTS.TITLE_CLICK:
        navigate('/');
        break;

      default:
        break;
    }
  }

  function breadcrumbOnClick(bread) {
    switch (bread) {
      case 'List':
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
    }),
    [count, level, itemId],
  );

  useEffect(() => {
    if (itemId && itemId !== '') {
      navigate(`/phone-detail/${itemId}`);
    } else {
      navigate('/');
    }
  }, [itemId]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
