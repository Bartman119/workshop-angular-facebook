import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  isRegistrationFinished = false;
  registrationForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),
    person: new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
    }),
  })

  constructor(private userService: UserService,
     fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const form = this.registrationForm.getRawValue();
    const status = this.userService.addUser({
      email: form.email,
      password: form.password,
      name: form.person.name,
      surname: form.person.surname,
    })
    if(status){
      this.isRegistrationFinished = true;
    }
  }

}
