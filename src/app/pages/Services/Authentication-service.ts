import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { RegistrationForm } from '../Models/registration-form';
import { RegisterForm } from '../Models/register-form';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public url: string='';
  constructor(private http: HttpClient) {}

  public fetchAllStatesDetail(): Observable<Array<any>> {
    return this.http.get<Array<any>>("assets/fake-response/registration-form.json");
  }
  public registerUserAndCompany(userdetails){
    return this.http.post(this.url,userdetails).pipe(
      catchError(this.handleError)
    );
  }
  // Observable<Object>

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        //errorMessage = 'Error: ' + error.error.message;
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
}
}