import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"

import { NgModule } from '@angular/core';

import ButtonComponent from './components/button/button.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [ButtonComponent],
  providers: [],
  bootstrap: []
})
export class AppModule { }
