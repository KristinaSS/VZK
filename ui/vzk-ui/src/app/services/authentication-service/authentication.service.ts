import { Injectable } from '@angular/core';
import {User} from "../../models/user/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate(username: string, password: string){
    let u = "foo";
    let p = "poo";

    let user: User = {
      id: '123',
      username: 'Axolotl',
      email: 'axolotl@gmail.com'
    }

    return username === u && password === p ? user : null;
  }
}
