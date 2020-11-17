import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http/http.service';
import { HeaderService } from './headers/header.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService,HeaderService]
})
export class CoreModule { }
