import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {Movie} from '../models/movie.model';



@Component({
  selector: 'app-moviedetail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  movie: Movie[];
  id: number = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.getMovie();
  }

  getMovie() {
    this.movie = this.movieService.getDataById(this.id);
  }

}
