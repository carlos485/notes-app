import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    title: 'Home',
    component: MainComponent,
    canActivate: [authGuard],
  },
];
