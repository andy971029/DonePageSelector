import { NgModule } from '@angular/core';
import { DonePageSelectorComponent } from './done-page-selector.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DonePageSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [DonePageSelectorComponent]
})
export class DonePageSelectorModule { }
