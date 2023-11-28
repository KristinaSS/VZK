import {Injectable} from '@angular/core';
import {Player} from "../../models/player/player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private lolPlayersMain: Player[] = [
    {
      id: '1',
      playerName: 'Lars',
      birthday: 21,
      countryOrigin: 'Netherlands',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Top',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Fiora_0.jpg'
    },
    {
      id: '2',
      playerName: 'Goldy',
      birthday: 21,
      countryOrigin: 'UK',
      twitter: 'https://twitter.com/Goldy_Jgl',
      role: 'Player, Jungle',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sejuani_0.jpg'
    },
    {
      id: '3',
      playerName: 'Hollow',
      birthday: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Mid',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xerath_0.jpg'
    },
    {
      id: '4',
      playerName: 'Smol Critter',
      birthday: 21,
      countryOrigin: 'Bulgaria',
      twitter: 'https://twitter.com/Actuallygeno',
      twitch: 'https://www.twitch.tv/genotx',
      instagram: 'https://www.instagram.com/genoenchev/',
      role: 'Player, ADC',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg'
    },
    {
      id: '5',
      playerName: 'Jollyboy',
      birthday: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Support',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_0.jpg'
    },
    {
      id: '6',
      playerName: 'TBA',
      birthday: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Dubi',
      birthday: 21,
      countryOrigin: 'Germany',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];
  private lolPlayersCobalt: Player[] = [
    {
      id: '1',
      playerName: 'InsaneTop',
      birthday: 21,
      countryOrigin: 'Italy',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Top',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
    },
    {
      id: '2',
      playerName: 'Insane JNG',
      birthday: 21,
      countryOrigin: 'Spain',
      twitter: 'https://twitter.com/',
      role: 'Player, Jungle',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Trundle_0.jpg'
    },
    {
      id: '3',
      playerName: 'Insane Mid',
      birthday: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Mid',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malzahar_0.jpg'
    },
    {
      id: '4',
      playerName: 'Insane ADC',
      birthday: 21,
      countryOrigin: 'Germany',
      instagram: 'https://www.instagram.com/',
      role: 'Player, ADC',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg'
    },
    {
      id: '5',
      playerName: 'Insane Sup',
      birthday: 21,
      countryOrigin: 'Croatia',
      twitch: 'https://www.twitch.tv/',
      role: 'Player, Support',
      image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg'
    },
    {
      id: '6',
      playerName: 'Insane Coach',
      birthday: 21,
      countryOrigin: 'UK',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Insane Manager',
      birthday: 21,
      countryOrigin: 'France',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];
  private valorantPlayers: Player[] = [
    {
      id: '1',
      playerName: 'InsanePlayer1',
      birthday: 21,
      countryOrigin: 'Ukraine',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      image: 'https://static.wikia.nocookie.net/valorant/images/8/85/Viper_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202837'
    },
    {
      id: '2',
      playerName: 'InsanePlayer2',
      birthday: 21,
      countryOrigin: 'Finland',
      twitter: 'https://twitter.com/',
      role: 'Player',
      image: 'https://static.wikia.nocookie.net/valorant/images/0/0e/Omen_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202807'
    },
    {
      id: '3',
      playerName: 'InsanePlayer3',
      birthday: 21,
      countryOrigin: 'Belgium',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      image: 'https://static.wikia.nocookie.net/valorant/images/7/7e/Sage_Artwork_Full.png/revision/latest?cb=20220810202824'
    },
    {
      id: '4',
      playerName: 'InsanePlayer4',
      birthday: 21,
      countryOrigin: 'Norway',
      instagram: 'https://www.instagram.com/',
      role: 'Player',
      image: 'https://static.wikia.nocookie.net/valorant/images/e/e3/Jett_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202742'
    },
    {
      id: '5',
      playerName: 'InsanePlayer5',
      birthday: 21,
      countryOrigin: 'Montenegro',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      image: 'https://static.wikia.nocookie.net/valorant/images/6/6f/Raze_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202815'
    },
    {
      id: '6',
      playerName: 'Insane Coach',
      birthday: 21,
      countryOrigin: 'Liechtenstein',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Insane Manager',
      birthday: 21,
      countryOrigin: 'Ireland',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];
  private csgoPlayers: Player[] = [
    {
      id: '1',
      playerName: 'InsanePlayer1',
      birthday: 21,
      countryOrigin: 'Albania',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      image: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFd2UGdsbjNfYjNZenhMNk5ta3E1YUtoZjcxUGFfUTJEb0R1cGR5MjdDVG9ZNmgzQTNqX0JJLVlXdjdKb0NRY3dCdk1ncUNybEMzbC1xNmdKRzE2c25YaVN3MHQyVjE0VFUvNTEyeDM4NA--/auto/auto/85/notrim/ec60e319fec508f9d5ccff685c43663a.webp'
    },
    {
      id: '2',
      playerName: 'InsanePlayer2',
      birthday: 21,
      countryOrigin: 'Liechtenstein',
      twitter: 'https://twitter.com/',
      role: 'Player',
      image: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFcxT1FobTF1RGJlREpNN2RDSmdvR1puN21nTnV1R2tESUY2WkVnMzczSG9JcWgyQURucWtGb04yMzFjb0tTZFZBN2FRdlpxMVByeE9icm05Ymk2eFl2MzdKSC81MTJ4Mzg0/auto/auto/85/notrim/d9b9d435cad6c9b1d293f05591b76506.webp'
    },
    {
      id: '3',
      playerName: 'InsanePlayer3',
      birthday: 21,
      countryOrigin: 'Estonia',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      image: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFd2UGdsbjNfYjNZenhMNk5ta3E1YUtoZjcxUGFfWDJHNEh1TUZ5anItWjhkdndqZ08xclJGbE56aW1MSWFVSkZNMmFGdUI4MUs0bGVxN2pKTzd2WlhYaVN3MEt5SnYtX1EvNTEyeDM4NA--/auto/auto/85/notrim/388515cadfcd81321a06dfe7d26b07b9.webp'
    },
    {
      id: '4',
      playerName: 'InsanePlayer4',
      birthday: 21,
      countryOrigin: 'Montenegro',
      instagram: 'https://www.instagram.com/',
      role: 'Player',
      image: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dER1NFcxSXdobDNmclFUaXREX3RXM21wU00yZlh5WTctRngya0o3WjBoak9xVHA5djMyZ2UxX2tScU56djdJNFREY3dFLVlWalFfVm0ya09qeHhjanJ5Z2V0NjBNLzUxMngzODQ-/auto/auto/85/notrim/c2496e59acb6fe7d2804668a2827a249.webp'
    },
    {
      id: '5',
      playerName: 'InsanePlayer5',
      birthday: 21,
      countryOrigin: 'Montenegro',
      twitch: 'https://www.twitch.tv/',
      role: 'Player',
      image: 'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9zdGVhbWNvbW11bml0eS1hLmFrYW1haWhkLm5ldC9lY29ub215L2ltYWdlLy05YTgxZGxXTHdKMlVVR2NWc19uc1Z0emRPRWR0V3dLR1paTFFIVHhEWjdJNTZLVTBad3dvNE5VWDRvRkpaRUhMYlhBNlExTkw0a21yQWxPQTBfRlZQQ2kydF9mVWtSeE56dFVvcmVhT0JCaHg4emVjQzlMN2RLaWs4N1R4UEtpTnVQVWxUOEl2WkVrMy1pWm90dnczUTNoLWhab2EyeW1kdEtUY1ZNNWFWelNxVmU1MzY2eDBzNlozM3pfLzUxMngzODQ-/auto/auto/85/notrim/8c9899108c7bd8147183335dbdd05f20.webp'
    },
    {
      id: '6',
      playerName: 'Insane Coach',
      birthday: 21,
      countryOrigin: 'Bulgaria',
      twitch: 'https://www.twitch.tv/',
      role: 'Coach',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    },
    {
      id: '7',
      playerName: 'Insane Manager',
      birthday: 21,
      countryOrigin: 'Italy',
      twitch: 'https://www.twitch.tv/',
      role: 'Manager',
      image: 'https://thumbs.dreamstime.com/b/human-man-head-glitch-face-anonymous-vector-icon-incognito-sign-privacy-concept-gamer-profile-avatar-291425654.jpg'
    }
  ];

  getLoLPlayersMain() {
    return this.lolPlayersMain;
  }

  getLoLPPlayersCobalt() {
    return this.lolPlayersCobalt;
  }

  getValorantPlayers() {
    return this.valorantPlayers;
  }

  getCsgoPlayers() {
    return this.csgoPlayers;
  }
}
