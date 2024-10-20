import { NgModule } from '@angular/core';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxSelectModule],
  exports: [],
  providers: [],
})
export class PinModule {}
