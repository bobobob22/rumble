import React, { useEffect, useState } from "react";

import { loadMoviesApi, updateMoviesData } from 'containers/App/api';
import { ContextProps, MoviesListSchema } from "components/MoviesList/types";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const MoviesContext = React.createContext<ContextProps>({
  loading: false,
  movies: { movies: [] },
  updateMovie: updateMoviesData
});

interface AppResponse {
  movies: MoviesListSchema[];
}

export const MoviesProvider: React.FunctionComponent = ({children}) => {
  const [response, setResponse] = useState<AppResponse>({ movies: [] });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async function (): Promise<void> {
    setLoading(true);

    const result = await loadMoviesApi();
    if (result) {
      setResponse(() => result);
    }
    setLoading(false);
  };
  console.log('response', response);

  return (
    <MoviesContext.Provider value={{ loading, movies: response, updateMovie: updateMoviesData }}>
      {children}
    </MoviesContext.Provider>
  );
};

