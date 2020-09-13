import React from 'react';
import { withTheme } from 'styled-components';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons/faTimesCircle';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';

import IconButton from 'components/IconButton';

import { MovieProps } from './types';
import {
  Root, MovieWrapper, Title, ImageWrapper, MovieImage, ButtonsWrapper, Summary,
} from './styles';

const Movie: React.FC<MovieProps> = ({
  theme, movie, handleRejectMovie, handleAcceptMovie,
}) => {
  const {
    imageURL, title, summary, rating,
  } = movie;

  return (
    <Root>
      <MovieWrapper>
        <Title>{`${title} ${rating} / 10`}</Title>
        <ImageWrapper>
          <MovieImage src={imageURL} alt={title} />
        </ImageWrapper>
        <Summary>
          {summary}
        </Summary>
        <ButtonsWrapper>
          <IconButton icon={faTimesCircle} color={theme.color.error} onClick={handleRejectMovie} />
          <IconButton icon={faCheckCircle} color={theme.color.active} onClick={handleAcceptMovie} />
        </ButtonsWrapper>
      </MovieWrapper>
    </Root>
  );
};

export default withTheme(Movie);
