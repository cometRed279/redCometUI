import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core/core.module';
import { LoginService } from './login/login.service';
import { UserService } from './users/user.service';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [LoginService, UserService, DashboardService]
})
export class ServiceModule { }
