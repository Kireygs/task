import {genreType} from '../../../assets/data/movie.model';

export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: typeof genreType[];
  rate: string;
  length: string;
  img: string;
}
