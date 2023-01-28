import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MatTableModule } from '@angular/material/table';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RowSelectionDirective } from 'src/app/row-selection.directive';
import { TitlePipePipe } from '../../title-pipe.pipe';





@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    RowSelectionDirective,
    TitlePipePipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RowSelectionDirective]
})
export class MoviesModule { }
