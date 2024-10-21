import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Modal } from 'bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PinService } from '../../services/pin-service.service';
import { FileUploader } from 'ng2-file-upload';
import { CountryData } from '../../core/interface';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent {
  collaboratorsArray: string[] = [];
  uploader: FileUploader;
  imageBase64: any = null; // Store the Base64 string
  imageLoaded: boolean = false;
  file: File | null = null;
  @Output() modalClosed = new EventEmitter<boolean>();
  @ViewChild('addPinModal') addPinModalModalEl?: ElementRef;
  modal?: Modal;
  addPinModalForm = new FormGroup({
    title: new FormControl('', Validators.required),
    collaborators: new FormControl([], Validators.required),
    privacy: new FormControl('Private', Validators.required),
    image: new FormControl(null, Validators.required),
  });
  constructor(private service: PinService) {
    this.uploader = new FileUploader({
      url: '',
      disableMultipart: true,
      formatDataFunctionIsAsync: true,
    });
  }
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
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageBase64 = e.target.result; // Base64 string of the image
        this.imageLoaded = true;

        // Save the Base64 string in localStorage
        sessionStorage.setItem(
          `${this.addPinModalForm.value.title}`,
          this.imageBase64
        );
        console.log('Image saved to localStorage.');
      };

      reader.readAsDataURL(this.file);
    }
    this.service.addNewPin({
      image: this.addPinModalForm.value.title,
      ...this.addPinModalForm.value,
    });
  }

  dropped(event: any) {
    this.file = event.target.files[0];
  }
}
