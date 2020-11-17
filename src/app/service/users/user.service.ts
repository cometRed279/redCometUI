import { Injectable } from '@angular/core';
import { HttpService } from 'src/core/http/http.service';
import { of } from 'rxjs';

@Injectable()
export class UserService {

  constructor() { }
  
  getUserListing(){
    return of({"users": {
      "user": [
        {
          "id": "120199053",
          "firstname": "fdemo",
          "lastname": "ldemo",
          "domainid": "120198962",
          "reference": "",
          "guid": "2716bd79-cf51-4842-a2e5-c9c2753b5524",
          "username": "demo",
          "email": "",
          "flags": 0,
          "lastpasswordchangeddate": "2020-02-04T04:33:11.63Z",
          "firstlogindate": "2019-06-03T03:15:07.47Z",
          "lastlogindate": "2020-02-12T13:37:34.193Z",
          "creationdate": "2019-06-03T03:06:01.787Z",
          "creationby": "102648185",
          "modifieddate": "2020-02-04T04:33:11.63Z",
          "modifiedby": "102648185",
          "version": "2"
        },
        {
          "id": "129567983",
          "firstname": "Local",
          "lastname": "Admin",
          "domainid": "120198962",
          "reference": "",
          "guid": "9f90ae9a-0191-401a-8bdf-0ddf98dc4af9",
          "username": "ladmin",
          "email": "",
          "flags": 0,
          "lastpasswordchangeddate": "2020-02-10T02:53:06.097Z",
          "firstlogindate": "2020-02-10T02:55:34.59Z",
          "lastlogindate": "2020-02-12T04:16:25.58Z",
          "creationdate": "2020-02-10T02:53:06.097Z",
          "creationby": "102648185",
          "modifieddate": "2020-02-10T02:53:06.097Z",
          "modifiedby": "102648185",
          "version": "1"
        },
        {
          "id": "129568068",
          "firstname": "sfname",
          "lastname": "slname",
          "domainid": "120198962",
          "reference": "",
          "guid": "047ab376-3274-4720-a664-a415aa26cf43",
          "username": "sname",
          "email": "",
          "flags": 0,
          "lastpasswordchangeddate": "2020-02-10T03:01:51.543Z",
          "firstlogindate": "2020-02-10T03:02:33.917Z",
          "lastlogindate": "2020-02-10T03:02:33.917Z",
          "creationdate": "2020-02-10T03:01:51.543Z",
          "creationby": "102648185",
          "modifieddate": "2020-02-10T03:01:51.543Z",
          "modifiedby": "102648185",
          "version": "1"
        }
      ]
    }})
  }
}
