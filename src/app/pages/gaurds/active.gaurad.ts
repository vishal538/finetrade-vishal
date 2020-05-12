import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
// import {  } from './auth.service';
import { ExploreTendersService } from '../Services/explore-tenders.service';
import { Observable } from 'rxjs';
@Injectable()
export class ActiveGuard implements CanActivate {
  constructor(private exploreservice: ExploreTendersService, private router:Router) {}
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.exploreservice.fetchAllCards()){
          return true;
      }else{
          alert("you don't have permission to view this page , Redirecting to explore-tenders");
          this.router.navigate(['explore-tenders']);
      }
    }
}