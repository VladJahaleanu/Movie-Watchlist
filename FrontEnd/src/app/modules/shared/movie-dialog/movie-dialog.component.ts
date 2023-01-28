import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {

  public movieEditForm : FormGroup = new FormGroup ({
    name: new FormControl(''),
    duration: new FormControl(0),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    private moviesService: MoviesService
  ) { 
    console.log(this.data);
    if(this.data.movie) {
      this.movieEditForm.patchValue(this.data.movie);
    }
  }

  get name(): AbstractControl{
    return this.movieEditForm.get('name') as AbstractControl;
  }

  get duration(): AbstractControl {
    return this.movieEditForm.get('duration') as AbstractControl;
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public onSave() {
    console.log(this.movieEditForm.value);
    this.moviesService.editMovie(this.data.id, this.movieEditForm.value).subscribe( (result) => {
      console.log(result);
      this.dialogRef.close(this.movieEditForm.value);;
    });

  }
  ngOnInit(): void {
  }

}
