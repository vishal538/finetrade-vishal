import {Component } from '@angular/core';
import { ProductDashboardSummary } from '../Models/ProductDashboardSummary';
import { DashboardService } from '../Services/dashboard.service';


@Component({
  selector: 'ngx-seller-dashboard',
  styleUrls: ['./seller-dashboard.component.scss'],
  templateUrl: './seller-dashboard.component.html',
})
export class SellerDashboard {


 
  public sellerdashboards: Array<ProductDashboardSummary>;
  public showNavigationIndicators: Boolean = false;

  constructor(private _sellerservice: DashboardService) {

  this._sellerservice.fetchAllSellerDashboards().subscribe((allsellerdashboards: Array<ProductDashboardSummary>) => {
      this.sellerdashboards = allsellerdashboards;
    });   
}
}
