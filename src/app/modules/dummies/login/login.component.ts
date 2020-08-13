import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.authService.login({username: this.username, password: this.password})
    .subscribe((res) => {
      localStorage.setItem('token', btoa(res.username))
      localStorage.setItem('user', JSON.stringify(res));
      console.log(this.authService.isLoggedIn);
      this.router.navigate(['/dummies/secret']);
    }, (error) => {
      console.error(error);
      alert('login failed')
    },() => {
      console.log(this.authService.isLoggedIn);
    })
  }
  // async submitForm() {
  //   await this.authService.login({username: this.username, password: this.password})
  //   .toPromise().then(res => {
  //     localStorage.setItem('token', btoa(res.username))
  //     localStorage.setItem('user', JSON.stringify(res));
  //   });
  //   console.log(this.authService.isLoggedIn);
  //   if (this.authService.isLoggedIn === true) {
  //     alert('login success')
  //     this.router.navigate(['/secret']);
  //   } else {
  //     alert('login failed')
  //   }
  // }

}
