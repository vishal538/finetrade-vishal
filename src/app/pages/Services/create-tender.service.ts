import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { CreateTenderOptions, AddressOptions } from '../Models/create-tender';
import { CreateTenderForm } from '../Models/Create-TenderForm';
import { User } from '../nested-table/models/nested-table.interface';


@Injectable({
  providedIn: 'root'
})
export class TenderManagementService {
  public body: CreateTenderForm= new CreateTenderForm();
  public url: string='assets/fake-response/create-tender.json';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient ) {}
  public getToken(){}
  public fetchCreateTenderFormOptions(): Observable<CreateTenderOptions>{
    return this.http.get<CreateTenderOptions>(this.url);
  }

  public postModeldata(){
    return this.http.post(this.url,this.body);
  }

  public getSomething(){

  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/fake-response/data.json');
  }

  public submitRegisterData(body, httpOptions) {
    return this.http.get( "assets/fake-response/http-status.json", body);
  }

  // public fetchAllselectOptions(): Observable<OrganisationNames> {
  //   return this.http.get<OrganisationNames>("assets/fake-response/names.json");
  // }
  public fetchAllAddressDetail(): Observable<AddressOptions> {
    return this.http.get<AddressOptions>("assets/fake-response/Address.json");
  }
}  
