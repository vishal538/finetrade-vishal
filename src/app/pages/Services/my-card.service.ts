import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { MyCard } from '../Models/my-card';

@Injectable({
  providedIn: 'root'
})
export class MyCardService {
  public url: string='';
  constructor(private http: HttpClient) {}

  public fetchAllProducts(): Observable<Array<MyCard>> {
    return this.http.get<Array<MyCard>>("assets/fake-response/my-card.json");
  }
}