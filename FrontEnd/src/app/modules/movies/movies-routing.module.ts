import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "movies",
  //   pathMatch: "full"
  // },
  {
    path: "movies",
    canActivate: [AuthGuard],
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    canActivate: [AuthGuard],
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
