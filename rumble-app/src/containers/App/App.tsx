import React, { useEffect, useState } from "react";

import MoviesList from "components/MoviesList";
import GlobalStyle from "global-styles";

import { loadMoviesApi, updateMoviesData } from "./api";
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

const App: React.FunctionComponent = () => {
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

  return (
    <MoviesContext.Provider value={{ loading, movies: response, updateMovie: updateMoviesData }}>
      <MoviesList data-testid="app" />
      <GlobalStyle />
    </MoviesContext.Provider>
  );
};

export default App;
