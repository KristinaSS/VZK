import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTeamsBannerComponent } from './top-teams-banner.component';

describe('TopTeamsBannerComponent', () => {
  let component: TopTeamsBannerComponent;
  let fixture: ComponentFixture<TopTeamsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTeamsBannerComponent]
    });
    fixture = TestBed.createComponent(TopTeamsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
