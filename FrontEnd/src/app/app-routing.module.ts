import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { MovieComponent } from './modules/movies/movie/movie.component';
import { MoviesComponent } from './modules/movies/movies/movies.component';
import { RegisterComponent } from './modules/auth/register/register.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('src/app/modules/movies/movies.module').then (m => m.MoviesModule)
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
