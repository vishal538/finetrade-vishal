import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'ngx-addProduct',
  styleUrls: ['./addProduct.component.scss'],
  templateUrl: './addProduct.component.html',
})
export class AddProductComponent implements OnInit{
    dropList=[];
    dropSettings={};
    dropdownList = [];
    selectedItems = [];
    choosenItems=[];
    dropdownSettings = {};
//     uploader:FileUploader;
//   hasBaseDropZoneOver:boolean;
//   hasAnotherDropZoneOver:boolean;
//   response:string;


  url="assets/images/add.png"
  URL="assets/images/add.png"

  constructor() {

    // this.uploader = new FileUploader({
    //     url: URL,
    //     disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
    //     formatDataFunctionIsAsync: true,
    //     formatDataFunction: async (item) => {
    //       return new Promise( (resolve, reject) => {
    //         resolve({
    //           name: item._file.name,
    //         //   length: item._file.size,
    //         //   contentType: item._file.type,
    //         //   date: new Date()
    //         });
    //       });
    //     }
    //   });
   
    //   this.hasBaseDropZoneOver = false;
    //   this.hasAnotherDropZoneOver = false;
   
    //   this.response = '';
      
    //   this.uploader.response.subscribe( res => this.response = res );
  
  
  }

    ngOnInit(){


        this.dropdownList = [
            {"id":1,"itemName":"India"},
            {"id":2,"itemName":"Singapore"},
            {"id":3,"itemName":"Australia"},
            {"id":4,"itemName":"Canada"},
            {"id":5,"itemName":"South Korea"},
            {"id":6,"itemName":"Germany"},
            {"id":7,"itemName":"France"},
            {"id":8,"itemName":"Russia"},
            {"id":9,"itemName":"Italy"},
            {"id":10,"itemName":"Sweden"}
          ];
          this.dropdownSettings = { 
            singleSelection: false, 
            text:"Select Category",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"myclass custom-class"
          };       

          this.dropList = [
            {"id":1,"itemName":"IUS"},
            {"id":2,"itemName":"Singapore"},
            {"id":3,"itemName":"Australia"},
            {"id":4,"itemName":"Canada"},
            {"id":5,"itemName":"South Korea"},
            {"id":6,"itemName":"Germany"},
            {"id":7,"itemName":"France"},
            {"id":8,"itemName":"Russia"},
            {"id":9,"itemName":"Italy"},
            {"id":10,"itemName":"Sweden"}
          ];
// this.selectedItems = [
//               {"id":2,"itemName":"Singapore"},
//               {"id":3,"itemName":"Australia"},
//               {"id":4,"itemName":"Canada"},
//               {"id":5,"itemName":"South Korea"}
//           ];
     

              this.dropSettings = { 
                singleSelection: false, 
                text:"Select Subcategory",
                selectAllText:'Select All',
                unSelectAllText:'UnSelect All',
                enableSearchFilter: true,
                classes:"myclass custom-class"
              };            
        }
        onItemSelect(item:any){
            console.log(item);
            console.log(this.selectedItems);
        }
        OnItemDeSelect(item:any){
            console.log(item);
            console.log(this.selectedItems);
        }
        onSelectAll(items: any){
            console.log(items);
        }
        onDeSelectAll(items: any){
            console.log(items);
        }

        onOptionSelect(option:any){
            console.log(option);
            console.log(this.choosenItems);
        }
        OnOptionDeSelect(option:any){
            console.log(option);
            console.log(this.choosenItems);
        }
        onSelectingAll(options: any){
            console.log(options);
        }
        onDeSelectingAll(options: any){
            console.log(options);
        }


        selectFile(event){
            if(event.target.files){
                var reader= new FileReader()
                reader.readAsDataURL(event.target.files[0])
                reader.onload=(event:any) => {
                    this.url=event.target.result
                }
            }
    
        }
    
        selectImage(event){
            if(event.target.files){
                var reader= new FileReader()
                reader.readAsDataURL(event.target.files[0])
                reader.onload=(event:any) => {
                    this.URL=event.target.result
                }
            }
    
        }
       
    }
    

