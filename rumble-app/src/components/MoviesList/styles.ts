import styled from 'styled-components';

import { NEXT } from './helpers';
import { CarouselProps, CarouselSlotProps } from './types';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${(props) => props.theme.breakpoints.up('md')} {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0,0,0,0.15);
  }
`;

export const MoviesListWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${(props: CarouselProps) => (props.sliding ? 'none' : 'transform .3s ease-in')};

  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-100%))';
    if (props.dir === NEXT) return 'translateX(calc(2 * (-100%)))';
    return 'translateX(0%)';
  }};
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${(props: CarouselSlotProps) => props.order};
`;
