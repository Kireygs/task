import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../models/movie.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable, Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { movies} from '../../../assets/data/movie.mock-data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

  @ViewChild(MatSort,  {static: true}) sort: MatSort;
  @ViewChild(MatPaginator,  {static: true}) paginator: MatPaginator;
  @ViewChild('placeInput',  {static: false}) placeInput: ElementRef<HTMLInputElement>;

  displayedColumns = ['id', 'name', 'genres', 'rate', 'length'];
  dataSource = new MatTableDataSource(movies);

  constructor(private movieService: MovieService) { }

  items: Movie[];

  ngOnInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.getData();
  }

  getData() {
    this.items = this.movieService.getData();
  }

}
