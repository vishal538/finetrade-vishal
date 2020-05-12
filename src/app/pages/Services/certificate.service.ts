import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Certification } from '../Models/certificates';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  public url: string='';
  constructor(private http: HttpClient) {}

  public fetchAllCertifiedUser(): Observable<Array<Certification>> {
    return this.http.get<Array<Certification>>("assets/fake-response/certification.json");
  }
}