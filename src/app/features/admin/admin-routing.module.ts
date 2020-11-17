import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CreateSubDomainComponent } from './create-sub-domain/create-sub-domain.component';

const routes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'subdomain/new', component: CreateSubDomainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
