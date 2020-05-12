import { Component, Input, Output, EventEmitter } from '@angular/core';

import { expandableTableRowAnimation } from '../animations/expandable-table-row.animation';
import { User, Relative, Phone } from '../models/nested-table.interface';


@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss', '../scss/nested-table.scss'],
  animations: [ expandableTableRowAnimation ]
})
export class TableRowComponent { 
 
  @Input() dataSource: User[] | Relative[] | Phone[];
  @Input() displayedColumns: string[];
  @Input() title: string;
  @Input() referenceId: string;
  @Input() iconKeyReference: string;
  @Input() renderTemplate: string;

  //@Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();

  expandedId: string = '';

  constructor() {}

  toggleExpandableSymbol(id: string): void {
    this.expandedId = this.expandedId === id ? '' : id;
  }

}