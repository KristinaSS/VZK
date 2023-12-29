import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../models/player/player";
import {EmailResponse} from "../../models/email-response/email-response";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {
  }
  getAccountEmail(): Observable<EmailResponse> {
    let vToken = sessionStorage.getItem("token");
    vToken = vToken || 'anonymous';

    return this.http.post<EmailResponse>('/server/api/v1/auth/email',
      {vToken},
      {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + vToken
      }),
      observe: 'body',
      responseType: 'json',
    });
  }

  getAccount(email: string | undefined): Observable<Player> {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';

    return this.http.get<Player>('/server/account/short/email/{email}?email=' + email, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
      observe: 'body',
      responseType: 'json',
    });
  }
}
