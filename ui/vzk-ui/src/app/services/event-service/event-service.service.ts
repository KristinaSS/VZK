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

    async getEvents(page: number, filter: string) {
        let token = sessionStorage.getItem("token");
        token = token || 'anonymous';
        return this.http.post<Event[]>('/server/event/all/active?page=' + page,
            {filter},
            {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + token
                })
            });
    }

    async getResults(page: number, filter: string) {
        let token = sessionStorage.getItem("token");
        token = token || 'anonymous';
        return this.http.post<Result[]>('/server/result/all/active?page=' + page,
            {filter},
            {
                headers: new HttpHeaders({
                    'Authorization': 'Bearer ' + token
                })
            });
    }
}
