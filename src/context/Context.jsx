import { createContext } from 'react';

export const Context = createContext({
  cartItems: 0,
  addItem: () => {},
  breadcrumbLevel: '',
  setBreadcrumbLevel: () => {},
  selectedItemId: '',
  setSelectedItemId: () => {},
});

export default Context;
