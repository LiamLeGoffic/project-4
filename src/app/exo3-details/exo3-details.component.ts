import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-exo3-details',
  standalone: true,
  imports: [],
  templateUrl: './exo3-details.component.html',
  styleUrl: './exo3-details.component.css'
})
export class Exo3DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  transactionId: any;
  transaction: any;

  constructor(private dataService: DataService) {
    this.transactionId = this.route.snapshot.params['id'];

  }

  ngOnInit() {
    this.dataService.getTransactionById(this.transactionId).subscribe(data => {
      this.transaction = data;
    });
  }

}
