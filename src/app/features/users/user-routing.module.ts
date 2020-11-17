import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UserTabsComponent } from './user-tabs/user-tabs.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEnrollmentComponent } from './user-enrollment/user-enrollment.component';
import { UserPerformanceComponent } from './user-performance/user-performance.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ImportUserComponent } from './import-user/import-user.component';

const routes: Routes = [
    {path: '',
    component: UsersListingComponent,
    canActivate : []
   },
   {
       path: 'create',
       component: CreateUserComponent,
       canActivate: []
   },
   {
    path: 'import',
    component: ImportUserComponent,
    canActivate: []
    },
   {
    path: 'user',
    component: UserTabsComponent,
    children: [{
        path: 'details',
        component: UserDetailsComponent
    },
    {
        path: 'enrollments',
        component: UserEnrollmentComponent
    },
    {
        path: 'performance',
        component: UserPerformanceComponent
    },
    {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
    }]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
