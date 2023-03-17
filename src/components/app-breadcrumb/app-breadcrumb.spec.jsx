import React from 'react';
import { render } from '@testing-library/react';

import { AppBreadcrumb } from './app-breadcrumb';

describe('AppBreadcrumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppBreadcrumb />);
    expect(baseElement).toBeTruthy();
  });
});
