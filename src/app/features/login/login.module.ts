import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from 'src/app/service/service.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [SharedModule]
})
export class LoginModule { }
