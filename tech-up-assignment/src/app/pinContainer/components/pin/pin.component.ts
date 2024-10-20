import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Modal } from 'bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PinServiceService } from '../../services/pin-service.service';
import { CountryData } from '../../core/interface';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent {
  originalData: CountryData[] = [];
  collaboratorsArray: string[] = [];
  countryArray: any[] = [];
  @Output() modalClosed = new EventEmitter<boolean>();
  @ViewChild('addPinModal') addPinModalModalEl?: ElementRef;
  modal?: Modal;
  addPinModalForm = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    collaborators: new FormControl('', Validators.required),
    privacy: new FormControl('Private', Validators.required),
  });
  constructor(private service: PinServiceService) {}
  ngOnInit(): void {
    this.collaboratorsArray = this.service.getAllCollaborators();
  }
  ngAfterViewInit() {
    this.addPinModalModalEl?.nativeElement.addEventListener(
      'hide.bs.modal',
      () => {
        this.modalClosed.emit(false);
      }
    );
    this.modal = new Modal(this.addPinModalModalEl?.nativeElement, {});
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
