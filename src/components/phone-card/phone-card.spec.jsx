import React from 'react';
import { render } from '@testing-library/react';

import { PhoneCard } from './phone-card';

describe('PhoneCard', () => {
  const productMock = jest.mock('./mocks/product.mock.json', () => ({ foo: 'bar' }), {
    virtual: true,
  });
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneCard product={productMock} />);
    expect(baseElement).toBeTruthy();
  });
});
