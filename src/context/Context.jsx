import { createContext } from 'react';

export const Context = createContext({
  cartItems: 0,
  addItem: () => {},
  breadcrumbLevel: 'Search',
  setBreadcrumbLevel: () => {},
  selectedItemId: '',
  setSelectedItemId: () => {},
});

export default Context;
