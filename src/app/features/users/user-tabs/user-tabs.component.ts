import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tabs',
  templateUrl: './user-tabs.component.html',
  styleUrls: ['./user-tabs.component.scss']
})
export class UserTabsComponent implements OnInit {

  constructor(private router: Router) { }
  links = ['USER DETAILS', 'ENROLLMENTS', 'PERFORMANCE'];
  routeLink = ['details', 'enrollments', 'performance']
  activeLink = this.links[0];
  
  ngOnInit() {
  }

  changeTab(e){
    console.log(`users/user/${this.routeLink[e]}`);
    this.activeLink = this.links[e];
    this.router.navigate([`users/user/${this.routeLink[e]}`])
  }

}
