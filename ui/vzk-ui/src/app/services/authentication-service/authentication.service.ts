import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtResponse} from "../../models/jwt-token/jwt-response";
import {FormGroup} from "@angular/forms";
import {VerifyToken} from "../../models/verificationToken/verify-token";

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

  async signup(signupForm: FormGroup) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';

    let email = signupForm.get('email')?.value;
    let username = signupForm.get('username')?.value;
    let password = signupForm.get('password')?.value;
    let name = signupForm.get('fName')?.value + " " + signupForm.get('lName')?.value;

    return this.http.post('/server/api/v1/auth/signup',
      {name, email, username, password},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  async verifyToken(vToken: string | null, email: string | null) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.post<VerifyToken>('/server/api/v1/auth/verify',
      {vToken, email},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  async resend(email: string | null) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.post<VerifyToken>('/server/api/v1/auth/resend',
      {email},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }
}
