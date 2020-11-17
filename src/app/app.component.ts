import { Component } from '@angular/core';
import { AuthService } from 'src/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly userProfile: AuthService,
              private readonly router: Router){}
  title = 'fe-app';

  logoutUser(event){
    this.userProfile.logout();
    this.router.navigate(['loginuser'])
  }
}
