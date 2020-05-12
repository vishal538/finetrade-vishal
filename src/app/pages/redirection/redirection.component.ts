import {Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-redirection',
  styleUrls: ['./redirection.component.scss'],
  templateUrl: './redirection.component.html',
})
export class Redirection {

  constructor(private router: Router) {
    setTimeout(() => this.router.navigate(['pages/plan-pricing-table']), 4000);
  }
}
