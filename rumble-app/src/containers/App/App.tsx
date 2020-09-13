import React, { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList';
import GlobalStyle from 'global-styles';

import { loadMoviesApi } from './api';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const MoviesContext = React.createContext<any>([[], () => {}]);

const App: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async function (): Promise<void> {
    setLoading(true);

    const result = await loadMoviesApi();
    if (result) {
      setMovies(() => result);
    }
    setLoading(false);
  };

  return (
    <MoviesContext.Provider value={{ loading, movies }}>
      <MoviesList data-testid="app" />
      <GlobalStyle />
    </MoviesContext.Provider>
  );
};

export default App;
