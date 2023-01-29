import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: any;

  public registerForm : FormGroup = new FormGroup ({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService 
  ) { }

  ngOnInit(): void {
  }

  get username(): AbstractControl | null {
    return this.registerForm.get('userName');
  }

  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  public onClickRegister() {
    const body = this.registerForm.value;
    this.authService.register(body).subscribe( (result) => {
      this.user = result;
      console.log(this.user);
      this.router.navigate(['/login']);
    })
  }

  public onClickLogin() {
    this.router.navigate(['/login']);
  }

  public onKeypressEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onClickRegister();
    }
  }

}
