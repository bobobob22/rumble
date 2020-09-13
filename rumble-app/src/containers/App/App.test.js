import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test.skip('renders learn react link', () => {
  const { getByTestId } = render(
    <App />,
  );
  expect(getByTestId('app')).toBeTruthy();
});
