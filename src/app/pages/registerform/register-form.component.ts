import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../Models/register';
import * as CryptoJS from 'crypto-js';
import { AuthenticationService } from '../Services/Authentication-service';
import { RegistrationForm } from '../Models/registration-form';
import { RegisterForm } from '../Models/register-form';

const AES = require('crypto-js/aes');

// const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'ngx-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
})
export class ResgisterFormComponent {
  //Password: string;
  conversionEncryptOutput: string;
  public userdetails: RegisterForm = new RegisterForm();
  public organisation: Array<string>;
  public userInfo: any;
  public States = [];
  public formOptions: any;

  public registerReactiveForm:FormGroup = new FormGroup({
    'organisationName': new FormControl(null, Validators.required),
    'category': new FormControl(null, Validators.required),
    'gst': new FormControl(null, Validators.required),
    'pan': new FormControl(null, Validators.required),
    'addressLine1': new FormControl(null, Validators.required),
    'mobile': new FormControl(null, Validators.required),
    'addressLine2': new FormControl(null, Validators.required),
    'country': new FormControl(null, Validators.required),
    'state': new FormControl(null, Validators.required),
    'district': new FormControl(null, Validators.required),
    'city': new FormControl(null, Validators.required),
    'ext': new FormControl(null, Validators.required),
    'pincode': new FormControl(null, Validators.required),
    'userName': new FormControl(null, Validators.required),
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'phone': new FormControl(null, [Validators.required, Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
    'password': new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ])),

    'confirmPassword': new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ])),

  }, {  validators: this.password.bind(this)});

  constructor(private router: Router, private _authenticationServices: AuthenticationService) {
    this._authenticationServices.fetchAllStatesDetail().subscribe((allStatesDetail: Array<any>) => {
      this.States = allStatesDetail; //array of any ko proper type dena hai baad mein
    });
  }

  ngOnInit() {}  
  
  //method is used to encrypt and decrypt the text  
  registerUser() {
    this.router.navigate(['pages/verify-email']);
    const encryptPass = AES.encrypt(this.userdetails.password.toString().trim());
    console.log(encryptPass);
    this.userdetails.password = encryptPass;
    /* this._authenticationServices.registerUserAndCompany(this.userdetails).subscribe((res : RegisterForm) => {
      this.userInfo = res
      console.log("data is saved",this.userdetails);
    },
    (error) => {
      alert("Register was unsuccessfull due to some issue. Please try after some time");
      console.log(error)
    }); */
   
  }
  

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    },
    )
  };
  // public selectOptions: any = [{id:0, name: "Accenture"},
  //                            {id:1, name: "TIAA"},
  //                            {id:2, name: "others"}];
  error_message = {
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'confirmpassword is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ]
  }

public password(formGroup: FormGroup) {
  const { value: password } = formGroup.get('password');
  const { value: confirmPassword } = formGroup.get('confirmPassword');
  let a = password === confirmPassword ? "" : { passwordNotMatch: 'passwords do not match' };
  return password === confirmPassword ? "" : { passwordNotMatch: 'passwords do not match' };
}
// public password(formGroup: FormGroup) {
//   const { value: password } = formGroup.get('password');
//   const { value: confirmPassword } = formGroup.get('confirmPassword');
//   return password === confirmPassword ? "" : { passwordNotMatch: 'password is not match' };
// }

  // public onLogin() {
  //   console.log(this.myReactiveForm);
  // }
  public statusCodeReg: any;
  // public registerUser(form: NgForm) {
  //   this._managementServices.submitRegisterData(this.body, this.httpOptions).subscribe((res => {
  //     console.log("response is here " + res);
  //     this.statusCodeReg = res;
  //     if (this.statusCodeReg.statusCode === '200' && this.registerReactiveForm.value.organisation === 'others') {
  //       this.router.navigate(['createorganisation']);
  //     } else if (this.statusCodeReg.statusCode !== '200' && this.registerReactiveForm.value.organisation === 'others') {
  //     } else {
  //       console.log(this.registerReactiveForm);
  //       this.registerReactiveForm.setErrors(); */
  //     }


  //   }));


  // }
}







