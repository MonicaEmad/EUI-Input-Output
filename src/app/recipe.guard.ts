import { inject } from '@angular/core';
import { AppService } from './app.service';
import { CanActivateFn } from '@angular/router';

export const recipeGuard: CanActivateFn = (route, state) => {
 const appService = inject(AppService)
 if (appService.isLogged){
    return true;
 }
 return false;
};
