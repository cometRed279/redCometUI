import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UsersRoutingModule } from './user-routing.module';
import { ServiceModule } from 'src/app/service/service.module';
import { SharedModule } from 'src/shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEnrollmentComponent } from './user-enrollment/user-enrollment.component';
import { UserPerformanceComponent } from './user-performance/user-performance.component';
import { UserTabsComponent } from './user-tabs/user-tabs.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ImportUserComponent } from './import-user/import-user.component';

@NgModule({
  declarations: [UsersListingComponent, UserDetailsComponent, UserEnrollmentComponent, UserPerformanceComponent, UserTabsComponent, CreateUserComponent, ImportUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ServiceModule,
    SharedModule
  ],
  exports:[SharedModule]
})
export class UsersModule { }
