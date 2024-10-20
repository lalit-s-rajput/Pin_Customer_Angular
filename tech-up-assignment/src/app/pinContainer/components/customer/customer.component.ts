import {
  AfterViewInit,
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { Modal } from 'bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PinServiceService } from '../../services/pin-service.service';
import { CountryData } from '../../core/interface';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  originalData: CountryData[] = [];
  regionArray: string[] = [];
  countryArray: any[] = [];
  @Output() modalClosed = new EventEmitter<boolean>();
  @ViewChild('customerModal') customerModalEl?: ElementRef;
  modal?: Modal;
  customerForm = new FormGroup({
    title: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });
  constructor(private service: PinServiceService) {}
  ngOnInit(): void {
    this.getRegionData();
  }
  getRegionData() {
    this.service.getCountry().subscribe((result: any) => {
      let dataValue = result.data;
      for (const prop in dataValue) {
        this.originalData.push(dataValue[prop]);
        this.regionArray.push(dataValue[prop]['region']);
      }
      this.regionArray = Array.from(new Set(this.regionArray));
    });
  }
  getRegionWiseCountry(region: string) {
    this.countryArray = [];
    for (const prop of this.originalData) {
      if (region === prop.region) {
        this.countryArray.push(prop.country);
      }
    }
  }
  ngAfterViewInit() {
    this.customerModalEl?.nativeElement.addEventListener(
      'hide.bs.modal',
      () => {
        this.modalClosed.emit(false);
      }
    );
    this.modal = new Modal(this.customerModalEl?.nativeElement, {});
    this.trigger();
  }

  trigger() {
    this.modal?.toggle();
  }
  saveChanges() {
    this.modal?.toggle();
    this.service.addNewCustomer();
  }
}
