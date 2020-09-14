import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

import { MoviesContext } from 'context/MoviesContext';
import MoviesList from './MoviesList';

it('should render movies list', () => {
  const movies = [
    {
      id: '12',
      _id: '121dsadsa',
      summary: 'movie description',
      rating: 5.5,
      title: 'title',
      imageURL: 'test.jpg',
    },
    {
      id: '123',
      _id: '1214dsadsa',
      summary: 'movie2 description',
      rating: 6.5,
      title: 'title2',
      imageURL: 'test2.jpg',
    },
  ];

  const { container } = render(
    <ThemeProvider theme={theme}>
      <MoviesContext.Provider value={{ loading: false, movies: { movies }, updateMovie: jest.fn() }}>
        <MoviesList />
      </MoviesContext.Provider>
    </ThemeProvider>,
  );
  expect(screen.getByText(movies[0].summary)).toBeInTheDocument();

  const button = container.getElementsByTagName('svg')[0];

  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(screen.getByText(movies[1].summary)).toBeInTheDocument();
});
