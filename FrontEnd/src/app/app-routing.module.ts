import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { MovieComponent } from './modules/movies/movie/movie.component';
import { MoviesComponent } from './modules/movies/movies/movies.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path: "",
  //   loadChildren: () => import('src/app/modules/movies/movies.module').then (m => m.MoviesModule)
  // },
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'movie/:id',
    canActivate: [AuthGuard],
    component: MovieComponent
  },
  {
    path: 'movies',
    canActivate: [AuthGuard],
    component: MoviesComponent
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
