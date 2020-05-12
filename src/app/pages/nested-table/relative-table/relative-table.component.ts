import { Component, OnInit, Input } from '@angular/core';
import { Relative } from '../models/nested-table.interface';




@Component({
  selector: 'app-relative-table',
  templateUrl: './relative-table.component.html',
  styleUrls: ['../scss/nested-table.scss']
})
export class RelativeTableComponent {

  @Input() relatives: Relative[];

  displayedColumns: string[] = [
    'Amount', 
    'Organisation', 
    'Bid Date',
    'Action'
  ];

  constructor() {}
  
}