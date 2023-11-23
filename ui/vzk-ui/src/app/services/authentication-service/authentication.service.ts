import { Injectable } from '@angular/core';
import {User} from "../../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate(username: string, password: string){
    let u = "foo";
    let p = "poo";
    let token  = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imx1bmFAZ21haWwuY29tIiwic3ViIjoidXNlciIsImlhdCI6MTcwMDc0NzA3NSwiZXhwIjoxNzAwNzUwNjc1fQ.JwYf0D-CoRKaIyELFWe9z7F66dnEiyqpx7bmWWuxpNQ";

    let user: User = {
      id: '123',
      username: 'Axolotl',
      email: 'axolotl@gmail.com',
      token: token
    }

    return username === u && password === p ? user : null;
  }
}
