import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  links = ['DOMAIN', 'SUBDOMAINS', 'ANNOUNCEMENTS'];
  activeLink = this.links[0];

  ngOnInit() {
  }

  changeTab(e){
    this.activeLink = this.links[e];
  }

}
