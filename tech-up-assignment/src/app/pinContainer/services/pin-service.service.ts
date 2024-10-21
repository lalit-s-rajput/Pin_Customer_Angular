import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PinService {
  private readonly regionURL = '';
  private readonly countryUrl = 'https://api.first.org/data/v1/countries';
  customersDataArray: string[] = [];
  pinDataArray = new BehaviorSubject<any>([]);
  customerIndex = 1;
  constructor(private http: HttpClient) {}
  getCountry() {
    return this.http.get('/api/data/v1/countries');
  }
  addNewCustomer() {
    this.customersDataArray.push(`Customer ${this.customerIndex}`);
    this.customerIndex++;
  }
  getAllCollaborators() {
    return this.customersDataArray;
  }
  addNewPin(pin: any) {
    this.pinDataArray.value.push(pin);
  }
}
