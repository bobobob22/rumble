export interface MoviesListSchema {
  id: string;
  imageUrl: string;
  title: string;
  summary: string;
  rating: number;
}

export interface CarouselProps {
  sliding?: boolean;
}

export interface CarouselSlotProps {
  order?: number
}
