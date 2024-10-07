import { Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2Component } from './exo2/exo2.component';
import { Exo3TransactionListComponent } from './exo3-transaction-list/exo3-transaction-list.component';
import { Exo3DetailsComponent } from './exo3-details/exo3-details.component';

export const routes: Routes = [
    {
        path: 'Exo1',
        component: Exo1Component,
        title: 'Exercise 1',
    },
    {
        path: 'Exo2',
        component: Exo2Component,
        title: 'Exercise 2',
    },
    {
        path: 'Exo3/transactions',
        component: Exo3TransactionListComponent,
        title: 'Exercise 3',
    },
    {
        path: 'Exo3/details/:id',
        component: Exo3DetailsComponent,
        title: 'Exercise 2',
    }
];
