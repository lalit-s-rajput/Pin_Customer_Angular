import { NgModule } from '@angular/core';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSelectModule,
    FileUploadModule,
  ],
  exports: [],
  providers: [],
})
export class PinModule {}
