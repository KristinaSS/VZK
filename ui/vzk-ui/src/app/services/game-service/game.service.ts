import {Injectable} from '@angular/core';
import {Game} from "../../models/game/game";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameList: Game[] = [];
  constructor(private http: HttpClient) {
    this.setGameList();
  }

  getGames(): Observable<Game[]> {

    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';

    return this.http.get<Game[]>('/server/game/all', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
      observe: 'body',
      responseType: 'json',
    });
  }


  getGame(id: string): Game {
    for (let game of this.gameList) {
      if (id === game.id) {
        return game;
      }
    }
    return new Game(``, ``, ``, ``);
  }

  getGameRanks(id: String): String[] {
    if (id === '1') {
      let lolRanks = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Emerald', 'Diamond', 'Master', 'Grandmaster', 'Challenger'];
      let lolDivisions = ['IV', 'III', 'II', 'I'];

      let combinedArray = [];

      for (let i = 0; i < lolRanks.length - 3; i++) {
        for (let j = 0; j < lolDivisions.length; j++) {
          let combinedRankDivision = lolRanks[i] + ' ' + lolDivisions[j];
          combinedArray.push(combinedRankDivision);
        }
      }
      combinedArray.push(lolRanks.at(7));
      combinedArray.push(lolRanks.at(8));
      combinedArray.push(lolRanks.at(9));

      // @ts-ignore
      return combinedArray;
    }

    if (id === '2') {
      let valorantRanks: string[] = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Immortal', 'Radiant'];
      let valorantDivisions: string[] = ['III', 'II', 'I'];

      let combinedArray = [];

      for (let i = 0; i < valorantRanks.length - 1; i++) {
        for (let j = 0; j < valorantDivisions.length; j++) {
          let combinedRankDivision = valorantRanks[i] + ' ' + valorantDivisions[j];
          combinedArray.push(combinedRankDivision);
        }
      }
      combinedArray.push(valorantRanks.at(7));

      // @ts-ignore
      return combinedArray;
    }

    if (id === '3') {
      return [
        'Silver I', 'Silver II', 'Silver III', 'Silver IV', 'Silver Elite', 'Silver Elite Master',
        'Gold Nova I', 'Gold Nova II', 'Gold Nova III', 'Gold Nova Master',
        'Master Guardian I', 'Master Guardian II', 'Master Guardian Elite', 'Distinguished Master Guardian',
        'Legendary Eagle', 'Legendary Eagle Master', 'Supreme Master First Class', 'Global Elite'];
    }
    return []
  }

  getGameRoles(id: string) {
    if (id === '1') {
      return ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];
    }

    if (id === '2') {
      return ['Leader', 'Entry Fragger', 'Lurker', 'Recon', 'Crowd Control'];
    }

    if (id === '3') {
      return ['Entry Fragger', 'Support', 'In Game Leader', 'Lurk', 'AWPer'];
    }
    return []
  }

  private setGameList(){
    this.getGames().subscribe(
      (data: Game[]) => {
        this.gameList = data;
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }
}
