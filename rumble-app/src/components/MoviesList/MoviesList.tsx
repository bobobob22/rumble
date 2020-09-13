import React, { useState, useContext } from 'react';
import { useSwipeable } from 'react-swipeable';

import { MoviesContext } from 'containers/App';
import Movie from 'components/Movie';

import { reducer, initialState } from './reducer';
import { getOrder, NEXT, PREV } from './helpers';
import {
  Root, MoviesListWrapper, CarouselContainer, CarouselSlot,
} from './styles';

const MoviesList: React.FC = (props): React.ReactElement | null => {
  const moviesContext = useContext(MoviesContext);
  const areMoviesExists = moviesContext && moviesContext.movies && moviesContext.movies.length;

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [visibleMovieIndex, setVisibleMovieIndex] = useState<number>(0);

  const handleRejectMovie = (id: string): void => {
    console.log('reject');
    slide(PREV);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
  };

  const handleAcceptMovie = (id: string): void => {
    console.log('accept');
    slide(NEXT);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
  };
  const numItems: number = moviesContext && moviesContext.movies && moviesContext.movies.length;

  const handleSwipeLeft = (): void => {
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    slide(PREV);
  };

  const moviesLimitHasAchiewed = areMoviesExists && moviesContext.movies.length === visibleMovieIndex;

  const slide = (dir: 'reset' | 'NEXT' | 'PREV' | 'stopSliding'): void => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: () => slide('stopSliding'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!areMoviesExists) {
    return null;
  }

  return (
    <Root>
      {moviesLimitHasAchiewed ? (
        <p>There is no more movies in our database...</p>
      ) : (
        <MoviesListWrapper {...handlers}>
          <CarouselContainer dir={state.dir} sliding={state.sliding}>
            {areMoviesExists && moviesContext.movies.map((movie: any, index: any) => {
              const isMovieVisible = index === visibleMovieIndex;
              return (
                <CarouselSlot
                  key={movie.id}
                  order={getOrder({ index, pos: state.pos, numItems })}
                >
                  <Movie
                    movie={movie}
                    handleRejectMovie={() => handleRejectMovie(movie.id)}
                    handleAcceptMovie={() => handleAcceptMovie(movie.id)}
                    isMovieVisible={isMovieVisible}
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
