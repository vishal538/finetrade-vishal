import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ExploreTenders } from '../Models/explore-tender';

@Injectable({
  providedIn: 'root'
})
export class ExploreTendersService {
  public body: ExploreTenders = new ExploreTenders();
  public url: string='';
  constructor(private http: HttpClient) {}

  public fetchAllCards(): Observable<Array<ExploreTenders>> {
    return this.http.get<Array<ExploreTenders>>("assets/fake-response/explore-tenders.json");
  }
  isDashboardRights():boolean{
    return true;
  }
}