import React, { useEffect, useState } from 'react';

import { apiUrl } from 'settings';
import MoviesList from 'components/MoviesList';
import GlobalStyle from 'global-styles';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const MoviesContext = React.createContext<any>([[], () => {}]);

const App: React.FunctionComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async function (): Promise<void> {
    try {
      const data = await fetch(`${apiUrl}/all`);
      const responseData = await data.json();
      if (responseData) {
        setMovies(() => responseData);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <MoviesContext.Provider value={movies}>
      <MoviesList data-testid="app" />
      <GlobalStyle />
    </MoviesContext.Provider>
  );
};

export default App;
