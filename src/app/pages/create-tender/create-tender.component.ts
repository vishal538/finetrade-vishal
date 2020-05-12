import {Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TenderManagementService} from '../Services/create-tender.Service';
import { from } from 'rxjs';
import { AddressOptions, CreateTenderOptions } from '../Models/create-tender';
import { FileUploader } from 'ng2-file-upload';
import { NbDateService } from '@nebular/theme';
 
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'ngx-create-tender',
  styleUrls: ['./create-tender.component.scss'],
  templateUrl: './create-tender.component.html',
})
export class CreateTenderComponent {
  firstFormGroup: FormGroup;
  public categoriesOptions: any;
  public stateOptions: any;
  public unitOfMeasurementOptions: any;
  public cityOptions: any;
  public formOptions: CreateTenderOptions;
  public objectEntries = Object.entries;
  public objectKeys = Object.keys;
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  min: Date;
  max: Date;
  public restrictedStateZoneOptions = [];
  public selectedRestrictedStateZoneItems = [];
  public settings = {};

  constructor(private _managementServices: TenderManagementService, protected dateService: NbDateService<Date>){

    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
 
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
    this.uploader.response.subscribe( res => this.response = res );



    this._managementServices.fetchCreateTenderFormOptions().subscribe((allSelectOptions: CreateTenderOptions) => {
      this.formOptions = allSelectOptions;
      console.log('list-', this.formOptions);
       this.categoriesOptions = Object.values(this.formOptions.categories);
      this.unitOfMeasurementOptions = Object.values(this.formOptions.unitOfMeasurement);
      this.stateOptions = Object.values(this.formOptions.address.states);

      this.stateOptions.forEach(stateObj => {
        let nextIndex = (this.restrictedStateZoneOptions.length === 0) ? 0 : ++this.restrictedStateZoneOptions[this.restrictedStateZoneOptions.length - 1].id;
        this.restrictedStateZoneOptions.push({ 'id': nextIndex, 'itemName': Object.keys(stateObj)[0] });
      });
      console.log(this.restrictedStateZoneOptions);
      // this.stateSecFormOptions = Object.values(this.formOptions.states);*/
    });

  }

  ngOnInit(){
    this.firstFormGroup = new FormGroup({
      title: new FormControl(''),
      productName: new FormControl(''),
      unit: new FormControl(''),
      categories: new FormControl(''),
      line1: new FormControl(''),
      line2: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
      openZoneForTender: new FormControl('')
    });
/*     this.restrictedStateZoneOptions = [
      // { "id": 1, "itemName": "India" },
      // { "id": 2, "itemName": "Singapore" },
      // { "id": 3, "itemName": "Australia" },
      // { "id": 4, "itemName": "Canada" },
      // { "id": 5, "itemName": "South Korea" },
      // { "id": 6, "itemName": "Brazil" },
      // { "id": 7, "itemName": "North Korea" },
      // { "id": 8, "itemName": "Balkistan" },
      // { "id": 9, "itemName": "Denmark" },
      // { "id": 10, "itemName": "Ukrane" },
      // { "id": 11, "itemName": "Greece" },
      // { "id": 12, "itemName": "Sumatra Islands" }
  ]; */
  this.settings = {
      text: "Select States",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
  };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedRestrictedStateZoneItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedRestrictedStateZoneItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  public submitData(){
    alert("hii");
  }
  public setCityOptions(): void {
    console.log("city options" +this.cityOptions);
    const selectedState = Object.values(this.stateOptions).find(x => Object.keys(x)[0] === this.firstFormGroup.get('state').value);
    this.cityOptions = Object.values(selectedState)[0];
  }

  
  getRegisterFormDetails(){

  }

   
  

}
