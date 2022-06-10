import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces/credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged = false;
  constructor() { }

  signIn(credentials: Credentials): boolean {
    console.log('User is login', credentials.email)
    this.isLogged = true;
    return true;
  }
}
