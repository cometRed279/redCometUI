import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListingComponent } from './course-listing/course-listing.component';

const routes: Routes = [
    {path: '',
     component: CourseListingComponent,
     canActivate : []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
