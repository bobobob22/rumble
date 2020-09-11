import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

import moviesData from 'data/movies.json';
import Movie from 'components/Movie';

import { MoviesListWrapper } from './styles';


interface CarouselProps {
  sliding?: boolean;
}

interface CarouselSlotProps {
  order?: number
}

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${(props: CarouselProps) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
  if (!props.sliding) return "translateX(calc(-100%))";
  if (props.dir === PREV) return "translateX(calc(2 * (-100%)))";
  return "translateX(0%)";
}};
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${(props: CarouselSlotProps) => props.order};
`;


export const NEXT = "NEXT";
export const PREV = "PREV";

// pozycja ostatnia bo ...
const initialState = { pos: 5, sliding: false, dir: NEXT };

type State = {
  pos: number;
  sliding?: boolean;
  dir?: string;
}

type Action =
  | { type: 'stopSliding' }
  | { type: 'reset', numItems: number }
  | { type: 'NEXT', numItems: number }
  | { type: 'PREV', numItems: number };

interface GetOrderProps {
  index: number;
  pos: number;
  numItems: number;
}

const getOrder = ({ index, pos, numItems }: GetOrderProps) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const MoviesList: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [visibleMovieIndex, setVisibleMovieIndex] = useState<number>(0);

  const handleRejectMovie = (id: string): void => {
    console.log('reject');
    slide(NEXT);
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
  };

  const handleAcceptMovie = (id: string): void => {
    console.log("accept")
    slide(NEXT)
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
  };
  const numItems: number = moviesData.length;

  function reducer(state: State, action: Action): State {
    console.log('state', state, 'action', action);
    switch (action.type) {
      case "reset":
        return initialState;
      case PREV:
        return {
          ...state,
          dir: PREV,
          sliding: true,
          pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1
        };
      case NEXT:
        return {
          ...state,
          dir: NEXT,
          sliding: true,
          pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1
        };
      case "stopSliding":
        return { ...state, sliding: false };
      default:
        return state;
    }
  }

  const handleSwipeLeft = () => {
    setVisibleMovieIndex(() => visibleMovieIndex + 1);
    slide(NEXT);
  };

  const moviesLimitHasAchiewed = moviesData.length === visibleMovieIndex;

  const slide = (dir: 'reset' | 'NEXT' | 'PREV' | 'stopSliding') => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: () => slide('stopSliding'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div>
      {moviesLimitHasAchiewed ? (
        <p>There is no more movies in our database...</p>
      ) : (
        <MoviesListWrapper {...handlers}>
          <CarouselContainer dir={state.dir} sliding={state.sliding}>
            {moviesData.map((movie, index) => {
              const isMovieVisible = index === visibleMovieIndex;
              return (
                <CarouselSlot
                  key={index}
                  order={getOrder({ index: index, pos: state.pos, numItems })}
                >
                  <Movie
                    key={movie.id}
                    movie={movie}
                    handleRejectMovie={() => handleRejectMovie(movie.id)}
                    handleAcceptMovie={() => handleAcceptMovie(movie.id)}
                    isMovieVisible={isMovieVisible}
                  />
                </CarouselSlot>
              )
            })}
          </CarouselContainer>
          <button onClick={() => slide(PREV)} >
            Prev
          </button>
          <button onClick={() => slide(NEXT)} >
            Next
          </button>
        </MoviesListWrapper>
      )}
    </div>
  )
};


export default MoviesList;
