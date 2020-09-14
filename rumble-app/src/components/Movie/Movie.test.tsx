import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/theme';

import Movie from './Movie';

it('should render single Movie', () => {
  const movieProps = {
    id: '123',
    imageURL: 'test.jpg',
    title: 'title',
    summary: 'summary',
    rating: 6.7,
    handleRejectMovie: jest.fn(),
    handleAcceptMovie: jest.fn(),
    handleSwipeLeft: jest.fn(),
    handleSwipeRight: jest.fn(),
  };

  render(
    <ThemeProvider theme={theme}>
      <Movie
        theme={theme}
        {...movieProps}
      />
    </ThemeProvider>,
  );
  expect(screen.getByText(`${movieProps.title} 6.7 / 10`)).toBeInTheDocument();
  expect(screen.getByText(movieProps.summary)).toBeInTheDocument();
});
