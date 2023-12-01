import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Team} from "../../../models/team/team";
import {Game} from "../../../models/game/game";
import {ScrollService} from "../../../services/scroll-service/scroll.service";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../../../services/team-service/team.service";
import {Player} from "../../../models/player/player";
import {GameService} from "../../../services/game-service/game.service";

@Component({
  selector: 'app-teams-box',
  templateUrl: './teams-box.component.html',
  styleUrls: ['./teams-box.component.css']
})
export class TeamsBoxComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() gameList!: Game[];
  teamList: Team[];

  constructor(
    private scrollService: ScrollService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private gameService: GameService
  ) {
    this.teamList = [];
    this.setTeamList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('gameList' in changes) {
      this.setTeamList();
    }
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.scrollIfNeeded(fragment);
    });

    this.scrollService.scrollToElement$.subscribe((gameId: string) => {
      this.scrollIfNeeded(gameId);
    });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      this.scrollIfNeeded(fragment);
    });
  }

  private scrollIfNeeded(gameId: string | null): void {
    if (gameId && this.gameList?.some(game => game.id === gameId)) {
      const element = this.el.nativeElement.querySelector(`#gameLogo-${gameId}`);
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    }
  }

  private setTeamList() {
    this.teamService.getTeams().subscribe(
      (data: Team[]) => {
        this.teamList = data;
        this.setPlayersForTeam();
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  private setPlayersForTeam() {
    for (let team of this.teamList) {
      this.teamService.getPlayersByTeam(team.id).subscribe(
        (players: Player[]) => {
          team.players = players.map(player => {
            player.age = this.calculateAge(player.birthday);
            return player;
          });
          team.players.sort((a, b) => b.role.localeCompare(a.role));
          this.setGameForTeam(team);
        },
        (error) => {
          console.error('Error fetching players:', error);
        }
      );
    }
  }

  private setGameForTeam(team: Team) {
    let gameId = team.game.toString();
    team.game = this.gameService.getGame(gameId);
  }

  private calculateAge(birthday: string): number {
    const birthdate = new Date(birthday);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
    ) {
      return age - 1;
    } else {
      return age;
    }
  }
}
