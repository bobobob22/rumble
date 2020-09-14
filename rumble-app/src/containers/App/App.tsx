import React from 'react';

import MoviesList from 'components/MoviesList';
import GlobalStyle from 'global-styles';

import { MoviesProvider } from 'context/MoviesContext';

const App: React.FunctionComponent = () => {
  return (
    <MoviesProvider>
      <MoviesList data-testid="app" />
      <GlobalStyle />
    </MoviesProvider>
  );
};

export default App;
