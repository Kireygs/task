import { Injectable } from '@angular/core';
import { movies } from '../../assets/data/movie.mock-data';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getData() {
    return movies;
  }

  getDataById(id) {
    return movies.find(x => x.id === id);
  }
}
