import {Component, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { NbSortDirection, NbTreeGridDataSource, NbSortRequest, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { TenderManagementService} from '../Services/create-tender.Service';
import { User } from '../nested-table/models/nested-table.interface';
@Component({
  selector: 'ngx-my-tenders',
  styleUrls: ['./my-tenders.component.scss'],
  templateUrl: './my-tenders.component.html',
})
export class MyTendersComponent {
  users: User[];

  displayedColumns: string[] = [
    'expandIcon',
    'Title', 
    'Product Name',
    'Quantity', 
    'Category', 
    'Date Posted', 
    'Status'
  ];

  constructor(private tenderManagementService: TenderManagementService) {}

  ngOnInit() {
    this.tenderManagementService
      .getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    this.users = [...this.users];
  }
}
