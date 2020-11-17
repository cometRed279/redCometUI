import { Injectable } from '@angular/core';
import { HttpService } from 'src/core/http/http.service';
import { REST_URL } from 'src/shared/constants/rest-end-points';
import { UserService } from '../users/user.service';
import { LoginService } from '../login/login.service';

@Injectable()
export class DashboardService {

  constructor(private http: HttpService,
              private loginService: LoginService) { }

  getEnrollementMeterics(){
    return this.http.get(`${REST_URL.context}/${REST_URL.dashboard.getEnrollementMeterics}/domain/${this.loginService.currentDomainId}`)
  }

}
