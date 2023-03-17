import React from 'react';
import { render } from '@testing-library/react';

import { PhoneColors } from './phone-colors';

describe('PhoneColors', () => {
  const colorsMock = [
    {
      code: 1000,
      name: 'Blue',
    },
    {
      code: 1001,
      name: 'White',
    },
  ];
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneColors colors={colorsMock} />);
    expect(baseElement).toBeTruthy();
  });
});
