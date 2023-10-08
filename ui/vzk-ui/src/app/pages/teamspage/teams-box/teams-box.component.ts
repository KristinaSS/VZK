import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Player} from "../../../models/player/player";
import {Team} from "../../../models/team/team";
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-teams-box',
  templateUrl: './teams-box.component.html',
  styleUrls: ['./teams-box.component.css']
})
export class TeamsBoxComponent implements OnChanges{
  @Input() gameList: Game[] | undefined;
  default: Game = {
    id: `0`,
    title: 'NaN',
    img: 'https://wallpapers.com/images/hd/hd-counter-strike-global-offensive-background-sp8pzwi24m2hz0vb.jpg',
    logo: 'https://esportbetweb.com/wp-content/uploads/2019/07/csgo-moreorange2.png'
  };

  lolPlayersMain: Player[] = [
    {
      id: '1',
      playerName: 'Lars',
      age: 21,
      countryOrigin: 'Netherlands',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Top',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiora_0.jpg'
    },
    {
      id: '2',
      playerName: 'Goldy',
      age: 21,
      countryOrigin: 'UK',
      twitter: 'https://twitter.com/Goldy_Jgl',
      role: 'Player, Jungle',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sejuani_0.jpg'
    },
    {
      id: '3',
      playerName: 'Hollow',
      age: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Mid',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xerath_0.jpg'
    },
    {
      id: '4',
      playerName: 'Smol Critter',
      age: 21,
      countryOrigin: 'Bulgaria',
      twitter: 'https://twitter.com/Actuallygeno',
      twitch: 'https://www.twitch.tv/genotx',
      instagram: 'https://www.instagram.com/genoenchev/',
      role: 'Player, ADC',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg'
    },
    {
      id: '5',
      playerName: 'Jollyboy',
      age: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Support',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_0.jpg'
    },
    {
      id: '6',
      playerName: 'TBA',
      age: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Dubi',
      age: 21,
      countryOrigin: 'Germany',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];
  lolPlayersCobalt: Player[] = [
    {
      id: '1',
      playerName: 'InsaneTop',
      age: 21,
      countryOrigin: 'Italy',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Top',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
    },
    {
      id: '2',
      playerName: 'Insane JNG',
      age: 21,
      countryOrigin: 'Spain',
      twitter: 'https://twitter.com/',
      role: 'Player, Jungle',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Trundle_0.jpg'
    },
    {
      id: '3',
      playerName: 'Insane Mid',
      age: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Mid',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malzahar_0.jpg'
    },
    {
      id: '4',
      playerName: 'Insane ADC',
      age: 21,
      countryOrigin: 'Germany',
      instagram: 'https://www.instagram.com/',
      role: 'Player, ADC',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg'
    },
    {
      id: '5',
      playerName: 'Insane Sup',
      age: 21,
      countryOrigin: 'Croatia',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Support',
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg'
    },
    {
      id: '6',
      playerName: 'Insane Coach',
      age: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Insane Manager',
      age: 21,
      countryOrigin: 'France',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];
  valorantPlayers: Player[] = [
    {
      id: '1',
      playerName: 'InsanePlayer1',
      age: 21,
      countryOrigin: 'Ukraine',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      img: 'https://static.wikia.nocookie.net/valorant/images/8/85/Viper_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202837'
    },
    {
      id: '2',
      playerName: 'InsanePlayer2',
      age: 21,
      countryOrigin: 'Finland',
      twitter: 'https://twitter.com/',
      role: 'Player',
      img: 'https://static.wikia.nocookie.net/valorant/images/0/0e/Omen_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202807'
    },
    {
      id: '3',
      playerName: 'InsanePlayer3',
      age: 21,
      countryOrigin: 'Belgium',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      img: 'https://static.wikia.nocookie.net/valorant/images/7/7e/Sage_Artwork_Full.png/revision/latest?cb=20220810202824'
    },
    {
      id: '4',
      playerName: 'InsanePlayer4',
      age: 21,
      countryOrigin: 'Norway',
      instagram: 'https://www.instagram.com/',
      role: 'Player',
      img: 'https://static.wikia.nocookie.net/valorant/images/e/e3/Jett_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202742'
    },
    {
      id: '5',
      playerName: 'InsanePlayer5',
      age: 21,
      countryOrigin: 'Montenegro',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      img: 'https://static.wikia.nocookie.net/valorant/images/6/6f/Raze_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202815'
    },
    {
      id: '6',
      playerName: 'Insane Coach',
      age: 21,
      countryOrigin: 'Liechtenstein',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Insane Manager',
      age: 21,
      countryOrigin: 'Ireland',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];
  csgoPlayers: Player[] = [
    {
      id: '1',
      playerName: 'InsanePlayer1',
      age: 21,
      countryOrigin: 'Albania',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      img: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFd2UGdsbjNfYjNZenhMNk5ta3E1YUtoZjcxUGFfUTJEb0R1cGR5MjdDVG9ZNmgzQTNqX0JJLVlXdjdKb0NRY3dCdk1ncUNybEMzbC1xNmdKRzE2c25YaVN3MHQyVjE0VFUvNTEyeDM4NA--/auto/auto/85/notrim/ec60e319fec508f9d5ccff685c43663a.webp'
    },
    {
      id: '2',
      playerName: 'InsanePlayer2',
      age: 21,
      countryOrigin: 'Liechtenstein',
      twitter: 'https://twitter.com/',
      role: 'Player',
      img: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFcxT1FobTF1RGJlREpNN2RDSmdvR1puN21nTnV1R2tESUY2WkVnMzczSG9JcWgyQURucWtGb04yMzFjb0tTZFZBN2FRdlpxMVByeE9icm05Ymk2eFl2MzdKSC81MTJ4Mzg0/auto/auto/85/notrim/d9b9d435cad6c9b1d293f05591b76506.webp'
    },
    {
      id: '3',
      playerName: 'InsanePlayer3',
      age: 21,
      countryOrigin: 'Estonia',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      img: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFd2UGdsbjNfYjNZenhMNk5ta3E1YUtoZjcxUGFfWDJHNEh1TUZ5anItWjhkdndqZ08xclJGbE56aW1MSWFVSkZNMmFGdUI4MUs0bGVxN2pKTzd2WlhYaVN3MEt5SnYtX1EvNTEyeDM4NA--/auto/auto/85/notrim/388515cadfcd81321a06dfe7d26b07b9.webp'
    },
    {
      id: '4',
      playerName: 'InsanePlayer4',
      age: 21,
      countryOrigin: 'Montenegro',
      instagram: 'https://www.instagram.com/',
      role: 'Player',
      img: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFcxSXdobDNmclFUaXREX3RXM21wU00yZlh5WTctRngya0o3WjBoak9xVHA5djMyZ2UxX2tScU56djdJNFREY3dFLVlWalFfVm0ya09qeHhjanJ5Z2V0NjBNLzUxMngzODQ-/auto/auto/85/notrim/c2496e59acb6fe7d2804668a2827a249.webp'
    },
    {
      id: '5',
      playerName: 'InsanePlayer5',
      age: 21,
      countryOrigin: 'Montenegro',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      img: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dFVvcmVhT0JCaHg4emVjQzlMN2RLaWs4N1R4UEtpTnVQVWxUOEl2WkVrMy1pWm90dnczUTNoLWhab2EyeW1kdEtUY1ZNNWFWelNxVmU1MzY2eDBzNlozM3pfLzUxMngzODQ-/auto/auto/85/notrim/8c9899108c7bd8147183335dbdd05f20.webp'
    },
    {
      id: '6',
      playerName: 'Insane Coach',
      age: 21,
      countryOrigin: 'Bulgaria',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Insane Manager',
      age: 21,
      countryOrigin: 'Italy',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      img: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];

  lolTeam: Team;
  lolCobaltTeam: Team;
  valorantTeam: Team;
  csgoTeam: Team;

  teamList: Team[];

  constructor() {
    console.log(this.gameList);
    console.log(this.gameList?.length);

    this.lolTeam = {
      id: '1',
      game: this.gameList && this.gameList.length > 0 ? this.gameList[0] : this.default,
      name: 'Obsidian',
      players: this.lolPlayersMain,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
    this.lolCobaltTeam = {
      id: '2',
      game: this.gameList && this.gameList.length > 0 ? this.gameList[0] : this.default,
      name: 'Cobalt',
      players: this.lolPlayersCobalt,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
    this.valorantTeam = {
      id: '3',
      game: this.gameList && this.gameList.length > 0 ? this.gameList[1] : this.default,
      name: 'Ruby',
      players: this.valorantPlayers,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
    this.csgoTeam = {
      id: '4',
      game: this.gameList && this.gameList.length > 0 ? this.gameList[2] : this.default,
      name: 'Ember',
      players: this.csgoPlayers,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };

    this.teamList =[this.lolTeam, this.lolCobaltTeam, this.valorantTeam, this.csgoTeam];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('gameList' in changes) {
      this.lolTeam = {
        id: '1',
        game: this.gameList && this.gameList.length > 0 ? this.gameList[0] : this.default,
        name: 'Obsidian',
        players: this.lolPlayersMain,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      };
      this.lolCobaltTeam = {
        id: '2',
        game: this.gameList && this.gameList.length > 0 ? this.gameList[0] : this.default,
        name: 'Cobalt',
        players: this.lolPlayersCobalt,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      };
      this.valorantTeam = {
        id: '3',
        game: this.gameList && this.gameList.length > 0 ? this.gameList[1] : this.default,
        name: 'Ruby',
        players: this.valorantPlayers,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      };
      this.csgoTeam = {
        id: '4',
        game: this.gameList && this.gameList.length > 0 ? this.gameList[2] : this.default,
        name: 'Ember',
        players: this.csgoPlayers,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      };

      this.teamList = [this.lolTeam, this.lolCobaltTeam, this.valorantTeam, this.csgoTeam];
    }
  }
}
