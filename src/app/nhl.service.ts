import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NhlService {

  constructor(private http:HttpClient) { }//inject nh; service here
  url = "https://statsapi.web.nhl.com/api/v1/teams/3/roster"
  getRoster(){//return an observable that will fetch data from API when .subscribe() is executed
    return this.http.get<any>(this.url);

  }
}
