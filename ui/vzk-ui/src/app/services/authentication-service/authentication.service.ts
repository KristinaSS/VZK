import {Injectable} from '@angular/core';
import {User} from "../../models/user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtResponse} from "../../models/jwt-token/jwt-response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string) {
    let u = "foo";
    let p = "poo";
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imx1bmFAZ21haWwuY29tIiwic3ViIjoidXNlciIsImlhdCI6MTcwMDc1MDQ1MCwiZXhwIjoxNzAwNzU0MDUwfQ.0ufnLOy4DkfDUR3GcheZ1FN-WxgDgHipwxdY3dEHBiA";

    let user: User = {
      id: '123',
      username: 'Axolotl',
      email: 'axolotl@gmail.com',
      token: token
    }
    let isAuthenticated = false;

    this.login(username, password).subscribe(
      (data: JwtResponse) => {
        sessionStorage.setItem("token", data.token);
        isAuthenticated = true;
      },
      (error) => {
        console.error('Error logging in:', error);
      }
    );

    if(isAuthenticated){
      return user;
    }else {
      return null
    }
  }

  login(email: string, password: string) {
    console.log("logging in");
    let token = sessionStorage.getItem("token");
    return this.http.post<JwtResponse>('/server/api/v1/auth/login',
      {email, password},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        }),
        observe: 'body',
        responseType: 'json',
      });
  }

  getUser(token: string){ //todo make this work
    console.log("logging in");
    return this.http.get<JwtResponse>('/server/api/v1/auth/login',
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        }),
        observe: 'body',
        responseType: 'json',
      });
  }
}
