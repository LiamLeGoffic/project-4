import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-exo3-transaction-list',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './exo3-transaction-list.component.html',
  styleUrl: './exo3-transaction-list.component.css'
})
export class Exo3TransactionListComponent {
  sortedTransactions: any;
  filter: string = 'date';
  asc: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getTransactions().subscribe(data => {
      this.sortedTransactions = data;
    });
    this.sortTransactions;
  }

  applyFilter(option: string) {
    this.asc = this.filter === option ? !this.asc : false;
    this.filter = option;
    this.sortTransactions();
  }

  applyStyle(option: string) {
    return {
      'background-color': this.filter === option ? (this.asc ? 'lightpink' : 'lightgreen') : 'white'
    }
  }

  sortTransactions() {
    this.sortedTransactions = this.sortedTransactions.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (this.asc) {
        return a[this.filter] > b[this.filter] ? 1 : -1;
      } else {
        return a[this.filter] < b[this.filter] ? 1 : -1;
      }
    });
  }

}
