import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../interface/user';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
    console.log(this.user);
  }

  public getUserInfo(): void {
    this.user = this.authService.getUserInfo();
  }

  public logout(): void {
    this.authService.logout();
  }

}
