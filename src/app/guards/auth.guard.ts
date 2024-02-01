import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const auth_service = inject(AuthService);
  const router = inject(Router);
  if (!auth_service.isAuth()) {
    router.navigate(['/login']);
  }
  return true;
};
