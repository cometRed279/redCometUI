import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/service/users/user.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit{

  constructor(private userService: UserService,
              private router: Router) { }

  displayedColumns: string[] = ['select', 'firstname', 'lastname', 'username', 'email', 'status' ];
  dataSource;
  selection = new SelectionModel(true, []);


  ngOnInit(){
    this.userService.getUserListing().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result.users.user);
    })
  }

 

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  goToUserTabs(e){
    this.router.navigate(['users/user']);
  }

  gotoCreateUser(e){
    this.router.navigate(['users/create'])
  }

  goToImportUser(e){
    this.router.navigate(['users/import'])
  }

}


