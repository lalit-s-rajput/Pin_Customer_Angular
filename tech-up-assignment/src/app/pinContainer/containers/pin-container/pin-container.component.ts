import { Component } from '@angular/core';
@Component({
  selector: 'app-pin-container',
  templateUrl: './pin-container.component.html',
  styleUrls: ['./pin-container.component.scss'],
})
export class PinContainerComponent {
  customerModalFlag = false;
  customerPinFlag = false;
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
}
