import { Routes } from '@angular/router';
import {UsersFormComponent} from './pages/users/users-form/users-form';

export const routes: Routes = [
  { path: '', component: UsersFormComponent, title: 'Home' },
  { path: '**', redirectTo: '' },
];
