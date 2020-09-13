import React, { useState, useContext } from 'react';
import { useSwipeable } from 'react-swipeable';

import { apiUrl } from 'settings';

import { MoviesContext } from 'containers/App';
import Movie from 'components/Movie';

import { reducer, initialState } from './reducer';
import { getOrder, NEXT, PREV } from './helpers';
import {
  Root, MoviesListWrapper, CarouselContainer, CarouselSlot,
} from './styles';

const MoviesList: React.FC = (props): React.ReactElement | null => {
  const { loading, movies } = useContext(MoviesContext);
  const areMoviesExists = movies && movies.movies && movies.movies.length;

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [visibleMovieIndex, setVisibleMovieIndex] = useState<number>(0);

  const handleRejectMovie = (movieId: number): void => {
    slide(PREV);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    sendUserChoice(movieId, 'reject');
  };

  const handleAcceptMovie = (movieId: number): void => {
    slide(NEXT);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    sendUserChoice(movieId, 'accept');
  };

  const sendUserChoice = async (movieId: number, userChoice: string): Promise<void> => {
    try {
      const data = await fetch(`${apiUrl}/reccomendations/${movieId}/${userChoice}`, {
        method: 'PUT',
      });
      const responseData = await data.json();
      if (responseData) {
        console.log('responseData', responseData);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const numItems: number = movies && movies.movies && movies.movies.length;

  const handleSwipeLeft = (): void => {
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    slide(PREV);
  };

  const moviesLimitHasAchiewed = areMoviesExists && movies.movies.length === visibleMovieIndex;

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

  if (loading) {
    return <p>Movies are loading...</p>;
  }

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
            {areMoviesExists && movies.movies.map((movie: any, index: any) => {
              const isMovieVisible = index === visibleMovieIndex;
              return (
                <CarouselSlot
                  // eslint-disable-next-line no-underscore-dangle
                  key={movie._id}
                  order={getOrder({ index, pos: state.pos, numItems })}
                >
                  <Movie
                    movie={movie}
                    // eslint-disable-next-line no-underscore-dangle
                    handleRejectMovie={() => handleRejectMovie(movie._id)}
                    // eslint-disable-next-line no-underscore-dangle
                    handleAcceptMovie={() => handleAcceptMovie(movie._id)}
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
