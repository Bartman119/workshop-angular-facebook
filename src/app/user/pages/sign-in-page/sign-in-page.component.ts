import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../interfaces/credentials.interface';
import { UserService } from '../../services/user.service';

type MyNullable<T> = {
  [P in keyof T]: T[P] | null; 
};


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  
  credentials: MyNullable<Credentials> = {
    email: null,
    password: null
  }

  constructor(
    private userService: UserService,
    private routes: Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('test, onSubmit' , this.credentials);
    this.userService.signIn(this.credentials as Credentials);
    this.routes.navigateByUrl('user/profile');
  }

}
