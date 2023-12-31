import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtResponse} from "../../models/jwt-token/jwt-response";
import {FormGroup} from "@angular/forms";
import {VerifyToken} from "../../models/verificationToken/verify-token";
import {RoleResponse} from "../../models/RoleResponse/role-response";
import {Player} from "../../models/player/player";

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

  async checkIfExpired() {
    let vToken = sessionStorage.getItem("token");
    vToken = vToken || 'anonymous';
    return this.http.post<VerifyToken>('/server/api/v1/auth/verify',
      {vToken},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + vToken
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

  async getRole() {
    let vToken = sessionStorage.getItem("token");
    vToken = vToken || 'anonymous';
    return this.http.post<RoleResponse>('/server/api/v1/auth/role',
      {vToken},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + vToken
        })
      });
  }

  async updateAccount(editForm: FormGroup) {
    let vToken = sessionStorage.getItem("token");
    vToken = vToken || 'anonymous';

    let email = editForm.get('email')?.value;
    let username = editForm.get('username')?.value;
    let password = editForm.get('password')?.value;
    let name = editForm.get('fName')?.value + " " + editForm.get('lName')?.value;

    return this.http.post<Player>('/server/api/v1/auth/user/update',
      {
        name, email, username, password
      },
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + vToken
        })
      });
  }

/*  async updatePlayer(player: Player, password: string) {
    let vToken = sessionStorage.getItem("token");
    vToken = vToken || 'anonymous';

    const name = player.name;
    const email = player.email;
    const username = player.username;

    return this.http.post<RoleResponse>('/server/api/v1/auth/player/update',
      {
        name, email, username, password
      },
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + vToken
        })
      });
  }*/
}
