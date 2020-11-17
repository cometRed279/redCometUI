import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatSliderModule } from '@angular/material';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { TreetableModule } from 'ng-material-treetable';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
  declarations: [SideBarComponent, CustomTableComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    TreetableModule,
    MatStepperModule,
    FormsModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    SideBarComponent,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    TreetableModule,
    MatStepperModule,
    FormsModule,
    CustomTableComponent
  ]
})
export class SharedModule { 
  constructor(){
    console.log("shared comdule init!");
  }
}
