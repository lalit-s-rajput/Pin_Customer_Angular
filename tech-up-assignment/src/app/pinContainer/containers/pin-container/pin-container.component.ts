import { Component } from '@angular/core';
@Component({
  selector: 'app-pin-container',
  templateUrl: './pin-container.component.html',
  styleUrls: ['./pin-container.component.scss'],
})
export class PinContainerComponent {
  customerModalFlag = false;
  openCustomerModal() {
    this.customerModalFlag = true;
  }
  modalClosed(event: boolean) {
    this.customerModalFlag = event;
  }
}
