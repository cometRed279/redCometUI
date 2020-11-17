import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeaderService {

  constructor() { }

  public static setHeaders(): HttpHeaders{
  let headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'responseType': 'blob'
  });
  return headers;
  }
}
