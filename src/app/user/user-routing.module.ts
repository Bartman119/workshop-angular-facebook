import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyForAuthUserGuard } from './guards/only-for-auth-user.guard';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignOutPageComponent } from './pages/sign-out-page/sign-out-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate: [OnlyForAuthUserGuard],
    title:" Profile * Facebook"
  },
  {
    path: 'register',
    component: SignUpPageComponent,
    title:" Register * Facebook"
  },
  {
    path: 'login',
    component: SignInPageComponent,
    title:" Login * Facebook"
  },
  {
    path: 'logout',
    component: SignOutPageComponent,
    canActivate: [OnlyForAuthUserGuard],
    title:" Logout * Facebook"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
