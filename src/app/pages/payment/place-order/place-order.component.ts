import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'ngx-placeOrder',
    styleUrls: ['./place-order.component.scss'],
    templateUrl: './place-order.component.html',
  })
  export class PlaceOrderComponent implements OnInit{
    

   
    constructor() {}
    
    ngOnInit() {
       
    }
    
     options = [
    { value: 'This is value 1', label: 'Option 1' },
    { value: 'This is value 2', label: 'Option 2' },
    { value: 'This is value 3', label: 'Option 3' },
    { value: 'This is value 4', label: 'Option 4' },
  ];
  option;

   
  }