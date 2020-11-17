import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../headers/header.service';

@Injectable()
export class HttpService{

  constructor(private readonly http: HttpClient) {
  }

  get(url: string, options?){
    return this.http.get(url, options ? options : HeaderService.setHeaders());
  }

  post(url: string, body, options?){
    return this.http.post(url, body, options ? options : HeaderService.setHeaders());
  }
}
