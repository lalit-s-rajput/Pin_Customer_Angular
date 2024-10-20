import { NgModule } from '@angular/core';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [CommonModule, FormsModule],
  exports: [],
  providers: [],
})
export class PinModule {}
