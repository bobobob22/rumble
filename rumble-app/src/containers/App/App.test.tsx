import React from 'react';
import {
  render, waitForElement, getByTestId, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import fetch from 'jest-fetch-mock';

import App from './App';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

it('should return response data', async () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  await act(() => {
    fetch.mockResponseOnce(JSON.stringify(
      {
        movies: [
          {
            _id: '121dsadsa',
            summary: 'summary',
            rating: 5.5,
            title: 'sala samobojcow',
            imageURL: 'test.jpg',
            accept: 'accept',
          },
          {
            _id: '122dsadsa',
            summary: 'summary2',
            rating: 5.6,
            title: 'dzien swira',
            imageURL: 'test2.jpg',
            accept: 'reject',
          },
        ],
      },
    ));
  });
  const { container } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);

  const moviesRoot = await waitForElement(() => getByTestId(container, 'movies-root'));
  expect(screen.getByText('summary')).toBeInTheDocument();
  expect(screen.getByText('summary2')).toBeInTheDocument();
});
