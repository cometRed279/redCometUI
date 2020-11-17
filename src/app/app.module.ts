import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/shared/auth/auth.guard';
import { AuthService } from 'src/shared/auth/auth.service';
import { CoreModule } from 'src/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import {CookieService} from 'ngx-cookie-service';
import { ServiceModule } from './service/service.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    ServiceModule
  ],
  providers: [AuthGuard, AuthService, CookieService],
  bootstrap: [AppComponent],
  exports:[SharedModule]
})
export class AppModule { }
