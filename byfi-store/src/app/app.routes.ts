import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'auth/sign-in', component: SignInComponent},
    {path: 'auth/sign-up', component: SignUpComponent}
];
