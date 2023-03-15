import { createContext } from 'react';

export const Context = createContext({
  cartItems: 0,
  addItem: () => {},
  breadcrumbLevel: 'Search',
  setBreadcrumbLevel: () => {},
});

export default Context;
