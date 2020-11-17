import { Injectable } from '@angular/core';
import { HttpService } from 'src/core/http/http.service';

import {REST_URL} from '../../../shared/constants/rest-end-points';
import { of } from 'rxjs';

@Injectable()
export class LoginService {

  currentDomainId: string;
  constructor(private readonly http: HttpService) { }

  authentication(user){
    const body = { request: {
      cmd : 'login2',
      ...user
    }
    }
     return this.http.post(`${REST_URL.context}/${REST_URL.login.url}`, body);
  }

}
