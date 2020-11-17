import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [CourseListingComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
