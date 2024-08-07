import { Movie } from "./Movie.interface";

export interface ISearch {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
