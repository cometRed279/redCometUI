import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() colHeaders;
  @Input() dataProperties;
  @Input() data;

  constructor() { }

  ngOnInit() {
    this.colHeaders = ['First Name', 'Last Name', 'Email', 'Password'];
    this.dataProperties = ['fname', 'lname', 'email', 'password']
  }

}
