import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-out-page',
  templateUrl: './sign-out-page.component.html',
  styleUrls: ['./sign-out-page.component.scss']
})
export class SignOutPageComponent implements OnInit {
  isLogoutFinished = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isLogoutFinished = this.userService.signOut();
  }

}
