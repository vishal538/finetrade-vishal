import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  firstFormGroup: FormGroup;
  ngOnInit(){
    this.firstFormGroup = new FormGroup({
      email: new FormControl('Nisha'),
      password: new FormControl('nisha'),
    });
  }
  public submitData(){
  alert("hii");
  }
}
