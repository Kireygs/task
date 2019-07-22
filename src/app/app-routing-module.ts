
import {MovieComponent} from './movie/movie.component';
import {MovieDetailComponent} from './movie/movie-detail/movie-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MovieListComponent} from './movie/movie-list/movie-list.component';





const appRoutes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full'},
  { path: 'movie', component: MovieComponent },
  { path: 'list', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
