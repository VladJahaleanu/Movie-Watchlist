import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies;
  public displayedColumns: string[] = ['id', 'name', 'duration'];
  public movieName;
  public movieDuration;
  public directorName;
  public id;


  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMovies();
    setTimeout(() => {
      console.log(this.movies);
    }, 60);
    
  }

  public getMovies(): void {
    this.moviesService.getAllMovies().subscribe( (result) => {
      this.movies = result;
      console.log(this.movies);
    })
  }

  public goToMovieDetailPage(id): void {
    this.router.navigate(['/movie', id])
  }

  public addData(): void {
    const movieToAdd = {
      id: this.id,
      name: this.movieName,
      duration: parseInt(this.movieDuration),
      directorName: this.directorName
    };

    this.moviesService.createMovie(movieToAdd).subscribe( () => {
      this.getMovies();
      this.movieName = '';
      this.directorName = '';
      this.id = parseInt(this.id) + 1;
      this.movieDuration = 0;
    });
  }
}
