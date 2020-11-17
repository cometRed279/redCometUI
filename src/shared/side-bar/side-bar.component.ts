import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  mouseIn = false;

  ngOnInit() {
  }

  navigateTo(view){
    this.router.navigate([view]);
  }

  mouseEntered(event){
    this.mouseIn = true;
  }

  mouseLeave(event){
    this.mouseIn = false;

  }

}
