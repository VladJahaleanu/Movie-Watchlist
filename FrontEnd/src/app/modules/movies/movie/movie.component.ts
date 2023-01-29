import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDialogComponent } from '../../shared/movie-dialog/movie-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  
  public id: any;
  private sub: any;
  public movie: any = {
    name: '',
    directorName: '',
    duration: ''
  };
  // public isValid;
  public movieForDialog;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe( params => {
        this.id = +params['id'];
        if (this.id !== null) {
          this.getMovieDetails();
        }
      });
    
  }

  public getMovieDetails(): void {
    this.movieService.getMovieById(this.id).subscribe( (result) => {

      this.movie = result;
      this.movieForDialog = {
        name: this.movie.name,
        duration: this.movie.duration
      };
      
      console.log(this.movie);
    });
  }

  public onEdit(): void {
    const data = {
        movie: this.movieForDialog,
        id: this.movie.id
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;

    var dialogRef = this.dialog.open(MovieDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.getMovieDetails();
      }
    });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
