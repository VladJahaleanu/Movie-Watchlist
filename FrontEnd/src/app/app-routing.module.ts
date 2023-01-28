import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './modules/movies/movie/movie.component';
import { MoviesComponent } from './modules/movies/movies/movies.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('src/app/modules/movies/movies.module').then (m => m.MoviesModule)
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
