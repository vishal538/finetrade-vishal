import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ProductDashboardSummary } from '../Models/ProductDashboardSummary';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url: string='';
  constructor(private http: HttpClient) {}

  public fetchAllSellerDashboards(): Observable<Array<ProductDashboardSummary>> {
    return this.http.get<Array<ProductDashboardSummary>>("assets/fake-response/product-dashboard-summary-list.json");
  }
}