import { Injectable } from '@angular/core';
import {Role} from "../../models/role/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roles: Role[] = [
    {id: '1', name: 'Player'},
    {id: '2', name: 'Manager'},
    {id: '3', name: 'Coach'},
    {id: '4', name: 'Caster'},
    {id: '5', name: 'Other'},
  ];
  constructor() { }

  getRoles() {
    return this.roles;
  }
}
