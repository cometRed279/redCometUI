import { Injectable } from '@angular/core';

import {CookieService} from 'ngx-cookie-service';
import { LoginService } from 'src/app/service/login/login.service';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  currentUser: any;
  constructor(private readonly cookieService: CookieService) { 
    console.log('auth service getting init');
  }

  saveCookie(id: string, value: string){
    this.cookieService.set(id, value);
  }

  getCookie(id: string){
    this.cookieService.get(id);
  }

  clearCookies(){
    this.cookieService.deleteAll();
  }

  isAuthenticated(){
    return !!(this.currentUser);
  }

  setProfile(user){
    this.saveCookie('token', user.token);
    this.currentUser = user;
  }
  clearProfile(){
    this.currentUser = null;
  }

  validateWithToken(){
    return this.cookieService.check('token')
    }

    isTokenValid(){
      let result = false;
       if(this.validateWithToken()){
         this.verifyAuth({}).subscribe(
           (res) => {
             this.setProfile(res.response);
             result = true;
           });
       }
       return result;
    }

    verifyAuth(val){
      return of({response: {code: 'ok', user:'sid', token: 'iamloggedinassid'}});
    }

    logout(){
      this.clearCookies();
      this.clearProfile();
    }
}
