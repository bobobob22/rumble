import React, { useState, useContext } from 'react';

import { MoviesContext } from 'context/MoviesContext';
import Movie from 'components/Movie';

import { reducer, initialState } from './reducer';
import { getOrder, NEXT, PREV } from './helpers';
import {
  Root, MoviesListWrapper, CarouselContainer, CarouselSlot,
} from './styles';
import { ContextProps } from './types';

const MoviesList: React.FC = (props): React.ReactElement | null => {
  const { loading, movies, updateMovie } = useContext<ContextProps>(MoviesContext);
  const numItems: number = movies?.movies?.length;

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [visibleMovieIndex, setVisibleMovieIndex] = useState<number>(0);

  const sendUserChoice = async (movieId: string, userChoice: string): Promise<void> => {
    const result = await updateMovie(movieId, userChoice);
    if (result) {
      console.log('updated')
    }
  };

  const handleRejectMovie = (movieId: string): void => {
    slide(PREV);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    sendUserChoice(movieId, 'reject');
  };

  const handleAcceptMovie = (movieId: string): void => {
    slide(NEXT);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    sendUserChoice(movieId, 'accept');
  };

  const handleSwipeRight = (): void => {
    slide('stopSliding');
  };

  const moviesLimitHasAchiewed = numItems && numItems === visibleMovieIndex;

  const slide = (dir: 'reset' | 'NEXT' | 'PREV' | 'stopSliding'): void => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  if (loading) {
    return <p>Movies are loading...</p>;
  }

  if (!numItems) {
    return null;
  }

  return (
    <Root data-testid="movies-root">
      {moviesLimitHasAchiewed ? (
        <p data-testid="no-response">There is no more movies in our database...</p>
      ) : (
        <MoviesListWrapper>
          <CarouselContainer dir={state.dir} sliding={state.sliding}>
            {numItems && movies.movies.map((movie, index) => {
              return (
                <CarouselSlot
                  // eslint-disable-next-line no-underscore-dangle
                  key={movie._id}
                  order={getOrder({ index, pos: state.pos, numItems })}
                >
                  <Movie
                    data-testid="movie"
                    id={movie._id}
                    imageURL={movie.imageURL}
                    title={movie.title}
                    summary={movie.summary}
                    rating={movie.rating}
                    // eslint-disable-next-line no-underscore-dangle
                    handleRejectMovie={() => handleRejectMovie(movie._id)}
                    // eslint-disable-next-line no-underscore-dangle
                    handleAcceptMovie={() => handleAcceptMovie(movie._id)}
                    handleSwipeLeft={handleRejectMovie}
                    handleSwipeRight={handleSwipeRight}
                  />
                </CarouselSlot>
              );
            })}
          </CarouselContainer>
        </MoviesListWrapper>
      )}
    </Root>
  );
};

export default MoviesList;
