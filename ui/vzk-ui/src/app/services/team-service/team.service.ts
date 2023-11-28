import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Team} from "../../models/team/team";
import {Player} from "../../models/player/player";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {
  }

  getTeams() {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.get<Team[]>('/server/team/all/active',
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  getPlayersByTeam(teamId: string) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.get<Player[]>('/server/team/{id}/players?id='+teamId,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }
}
