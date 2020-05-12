import {Component} from '@angular/core';
import { ExploreTenders } from '../Models/explore-tender';
import { ExploreTendersService } from '../Services/explore-tenders.service';
import { from } from 'rxjs';

@Component({
  selector: 'ngx-explore-tenders',
  styleUrls: ['./explore-tenders.component.scss'],
  templateUrl: './explore-tenders.component.html',
})
export class ExploreTendersComponent {
    public config: any;
    public itemsPerPage = "3";
    public p: number;
    // public card = { count: 60, data: [] };
    public cards: Array<ExploreTenders>;
    public showNavigationIndicators: Boolean = false;
  
    constructor(private _cardservice: ExploreTendersService) {
  
    this._cardservice.fetchAllCards().subscribe((allcards: Array<ExploreTenders>) => {
        this.cards = allcards;
      });
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.cards
      };
    }
    pageChanged(event) {
      this.config.currentPage = event;
    }
  }
 
