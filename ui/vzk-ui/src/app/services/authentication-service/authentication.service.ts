import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtResponse} from "../../models/jwt-token/jwt-response";
import {FormGroup} from "@angular/forms";
import {VerifyToken} from "../../models/verificationToken/verify-token";
import {RoleResponse} from "../../models/RoleResponse/role-response";

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

    let fName = signupForm.get('fName')?.value;
    let lName = signupForm.get('lName')?.value;
    let name = fName + " " + lName;
    name = name.trim();

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
    username = username.trim();
    password = password.trim();
    name = name.trim();

    return this.http.post('/server/api/v1/auth/user/update',
      {
        name, email, username, password
      },
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + vToken
        })
      });
  }

  async updatePlayer(editForm: FormGroup, email: string) {
    const vToken = sessionStorage.getItem("token") || 'anonymous';

    let countryOrigin = editForm.get('countryOrigin')?.value || null;
    const birthday = editForm.get('birthday')?.value || null;
    const gender = editForm.get('gender')?.value || null;
    const playerName = editForm.get('playerName')?.value || null;
    const instagram = editForm.get('instagram')?.value || null;
    const twitter = editForm.get('twitter')?.value || null;
    const twitch = editForm.get('twitch')?.value || null;
    const youtube = editForm.get('youtube')?.value || null;
    const image = editForm.get('image')?.value || null;

    if (countryOrigin == "United Kingdom of Great Britain and Northern Ireland") {
      countryOrigin = "UK";
    }
    if (countryOrigin == "United States of America") {
      countryOrigin = "USA";
    }

    const payload = {
      email,
      birthday,
      countryOrigin,
      image,
      playerName,
      gender,
      instagram,
      twitter,
      twitch,
      youtube,
    };

    return this.http.post('/server/player/update/user', payload, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + vToken,
        'Content-Type': 'application/json', // Make sure to set the content type
      }),
    });
  }

}
