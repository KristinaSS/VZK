import {Injectable} from '@angular/core';
import {Event} from 'src/app/models/event/event';
import {Result} from "../../models/result/result";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor(private http: HttpClient) {
  }

  getEvents(page: number) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.get<Event[]>('/server/event/all/active?page=' + page,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  getResults(page: number) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.get<Result[]>('/server/result/all/active?page=' + page,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }
}
