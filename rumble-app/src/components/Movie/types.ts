import { CustomTheme } from 'theme/theme';

export interface MovieProps {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
  handleRejectMovie: () => void;
  handleAcceptMovie: () => void;
  theme: CustomTheme;
  handleSwipeLeft: (movieId: string) => void;
  handleSwipeRight: (movieId: string) => void;
}
