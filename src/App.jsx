import React, { useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { AppHeader } from './components/app-header/app-header';
import { AppBreadcrumb } from './components/app-breadcrumb/app-breadcrumb';
import { HEADER_EVENTS } from './components/app-header/app-header.const';
import { Context } from './context/Context';
import { PhonesListPage } from './pages/phones-list-page/phone-list-page';
import { PhoneDetailsPage } from './pages/phones-details-page/phone-details-page';
import './App.css';

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

function breadcrumbOnClick(level) {
  switch (level) {
    case 'Search':
      navigate('/');
      break;
    default:
      break;
  }
}

export function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState('Search');

  const value = useMemo(
    () => ({
      cartItems: count,
      addItem: setCount((c) => c + 1),
      breadcrumbLevel: level,
      setBreadcrumbLevel: setLevel((l) => l),
    }),
    [count, level],
  );

  return (
    <div className="App">
      <Context.Provider value={value}>
        <BrowserRouter>
          <h1>HOLA MUNDO</h1>
          <AppHeader
            title="The Fon shop"
            srcLogo="/logo.png"
            srcShoppingcart="/shoppingcart.svg"
            headerOnClick={headerOnClick}
          />
          <AppBreadcrumb level={level} goToView={(bread) => breadcrumbOnClick(bread)} />

          <div className="app container mt-4">
            <div className="app-content">
              <div className="app container">
                <Routes>
                  <Route path="/" element={<PhonesListPage />} />
                  <Route path="/phone-detail/:id" element={<PhoneDetailsPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
