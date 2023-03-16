import { createContext } from 'react';

export const Context = createContext({
  cartItems: 0,
  addItem: () => {},
  breadcrumbLevel: '',
  setBreadcrumbLevel: () => {},
  selectedItemId: '',
  setSelectedItemId: () => {},
  selectedProduct: {},
});

export default Context;
