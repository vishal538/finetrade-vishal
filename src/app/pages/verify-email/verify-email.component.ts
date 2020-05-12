import {Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-verify-email',
  styleUrls: ['./verify-email.component.scss'],
  templateUrl: './verify-email.component.html',
})
export class VerifyEmail {
  userVerifyForm: FormGroup;

    ngOnInit(){
      this.userVerifyForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email])
    });
    }
}