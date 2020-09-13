export interface MoviesListSchema {
  id: string;
  _id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}

export interface CarouselProps {
  sliding?: boolean;
}

export interface CarouselSlotProps {
  order?: number;
}


export interface ContextProps {
  loading: boolean;
  movies: {
    movies: MoviesListSchema[]
  };
  updateMovie: (movieId: string, userChoice: string) => Promise<any>
}
