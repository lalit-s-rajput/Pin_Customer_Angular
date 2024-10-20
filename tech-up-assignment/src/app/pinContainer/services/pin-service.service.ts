import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CountryData, ResultData, ResultsData } from '../core/interface';
@Injectable({
  providedIn: 'root',
})
export class PinServiceService {
  private readonly regionURL = '';
  private readonly countryUrl = 'https://api.first.org/data/v1/countries';
  customersDataArray: string[] = [];
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
}
