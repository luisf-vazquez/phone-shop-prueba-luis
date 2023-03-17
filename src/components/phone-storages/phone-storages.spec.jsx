import React from 'react';
import { render } from '@testing-library/react';

import { PhoneStorages } from './phone-storages';

describe('PhoneStorages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneStorages />);
    expect(baseElement).toBeTruthy();
  });
});
