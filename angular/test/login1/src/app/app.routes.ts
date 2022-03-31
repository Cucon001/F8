import { Routes, CanActivate } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { AppComponent } from './app.component';
export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];