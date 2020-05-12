export interface Relative {
    ['Amount']: string;
    ['Organisation']: string;
    ['Bid Date']: boolean;
    ['Action']: number;
  }
  
  export interface Phone {
    ['Phone ID']: string;
    ['ID of the relative']: string;
    Phone: string;
  }
  
  export interface KidRecord {
    data?: Phone;
    kids?: KidRecord;
  }
  
  export interface UserRecord {
    data?: Relative;
    kids?: {
      has_phone?: {
        records: KidRecord;
      }
    }
  }
  
  export interface UserData {
    Title: string;
    ProductName: string;
    Quantity: number;
    Category: string;
    ['Date Posted']: Date;
    IQ: number;
    ['Status']:string;
  }
  
  export interface User {
    data: UserData;
    kids: {
      has_relatives?: { 
        records: UserRecord[]; 
      }
    };
  }