import { Component, OnInit } from '@angular/core';
import { PinService } from '../../services/pin-service.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pin-container',
  templateUrl: './pin-container.component.html',
  styleUrls: ['./pin-container.component.scss'],
})
export class PinContainerComponent implements OnInit {
  customerModalFlag = false;
  customerPinFlag = false;
  pinList$: Subject<any> | null = null;
  constructor(private service: PinService) {}
  ngOnInit(): void {
    this.pinList$ = this.service.pinDataArray;
  }
  openCustomerModal() {
    this.customerModalFlag = true;
  }
  openPinModal() {
    this.customerPinFlag = true;
  }
  customerModalClosed(event: boolean) {
    this.customerModalFlag = event;
  }
  pinModalClosed(event: boolean) {
    this.customerPinFlag = event;
  }
  getImageFromLocalStorage(pin: string): string | null {
    return sessionStorage.getItem(pin);
  }
}
