import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = '../assets/data/';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any> {
    return this.http.get<any>(this.jsonUrl + 'transactions.json');
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get<any>(this.jsonUrl + id + '.json');
  }
}
