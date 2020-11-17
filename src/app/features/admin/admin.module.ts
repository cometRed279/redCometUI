import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminRoutingModule} from './admin-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { DomainComponent } from './domain/domain.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { CreateSubDomainComponent } from './create-sub-domain/create-sub-domain.component';
import { ServiceModule } from 'src/app/service/service.module';

@NgModule({
  declarations: [DashboardComponent, DomainComponent, SubDomainComponent, CreateSubDomainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
