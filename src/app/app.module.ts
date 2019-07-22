


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing-module';
import {NgModule} from '@angular/core';


import {MovieComponent} from './movie/movie.component';
import {MovieDetailComponent} from './movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

import {MovieService} from './movie/movie.service';


import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';

import {FilterPipe} from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatSortModule, MatTableModule, MatPaginatorModule,
        MatDialogModule, MatListModule, MatGridListModule, MatAutocompleteModule, MatChipsModule,
        MAT_CHIPS_DEFAULT_OPTIONS,} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




const MaterialModules = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatListModule,
  MatGridListModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatChipsModule,
  MatIconModule
];


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    FilterPipe,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  providers: [MovieService,     {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
