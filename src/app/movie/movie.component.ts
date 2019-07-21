import { Component, OnInit } from '@angular/core';
import {Movie} from './models/movie.model';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  items: Movie[];
  name = '';

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.items = this.service.getData();
  }

  search() {
    if (this.name !== '') {
    } else if (this.name === '') {
      this.ngOnInit();
    }
    this.items = this.items.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }

}
