import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: any;

  public loginForm : FormGroup = new FormGroup ({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get username(): AbstractControl | null {
    return this.loginForm.get('userName');
  }


  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  public onClickLogin() {
    const body = this.loginForm.value;
    this.authService.login(body).subscribe( (result) => {
      this.user = result;
      console.log(this.user);
      localStorage.setItem(
        'Username',
        this.user.username
      );
      localStorage.setItem(
        'auth-token',
        this.user.token
      );
      this.router.navigate(['/movies']);
    })
    
  }

  public onClickRegister() {
    this.router.navigate(['/register']);
  }

  public onKeypressEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onClickLogin();
    }
  }

}
