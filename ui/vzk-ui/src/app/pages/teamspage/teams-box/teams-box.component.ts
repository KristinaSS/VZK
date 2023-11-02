import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Team} from "../../../models/team/team";
import {Game} from "../../../models/game/game";
import {ScrollService} from "../../../services/scroll-service/scroll.service";
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../../../services/team-service/team.service";

@Component({
  selector: 'app-teams-box',
  templateUrl: './teams-box.component.html',
  styleUrls: ['./teams-box.component.css']
})
export class TeamsBoxComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() gameList: Game[] | undefined;
  teamList: Team[];

  constructor(
    private scrollService: ScrollService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {
    this.teamList = teamService.getTeams();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('gameList' in changes) {
      this.teamList = this.teamService.getTeams();
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
}
