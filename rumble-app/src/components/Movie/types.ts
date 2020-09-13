import { CustomTheme } from 'theme/theme';

export interface MovieProps {
  movie: {
    id: string;
    imageURL: string;
    title: string;
    summary: string;
    rating: number;
  };
  handleRejectMovie: () => void;
  handleAcceptMovie: () => void;
  theme: CustomTheme;
}
