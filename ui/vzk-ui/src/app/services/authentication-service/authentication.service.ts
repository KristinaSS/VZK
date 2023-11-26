import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtResponse} from "../../models/jwt-token/jwt-response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }

  async authenticate(email: string, password: string) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.post<JwtResponse>('/server/api/v1/auth/login',
      {email, password},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }
}
