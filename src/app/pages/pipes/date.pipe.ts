import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import localeAr from '@angular/common/locales/ar';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
       return super.transform(value, "dd MMM yyyy h:mm:ss");
    // if(navigator.language=='ar'){
    //   return super.transform(value, "dd MMM y h:mm:ss a",null,"ar");
    // }else{
    //   return super.transform(value, "dd MMM y h:mm:ss a");
    // }
    
  }
}