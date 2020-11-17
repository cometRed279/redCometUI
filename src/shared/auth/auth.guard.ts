import {Injectable} from '@angular/core';
import {Router, CanLoad, Route, UrlSegment} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService,
                private router: Router){}
    canLoad(route: Route, segments: UrlSegment[]){
        if(!this.authService.isAuthenticated()){
            if(!this.authService.isTokenValid()){
                if(route.path !== 'loginuser'){
                    this.router.navigate(['loginuser']);
                }
            } 
        }
        return true;
    }
}