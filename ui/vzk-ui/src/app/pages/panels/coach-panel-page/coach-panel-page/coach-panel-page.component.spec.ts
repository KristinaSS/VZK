import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPanelPageComponent } from './coach-panel-page.component';

describe('CoachPanelPageComponent', () => {
  let component: CoachPanelPageComponent;
  let fixture: ComponentFixture<CoachPanelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoachPanelPageComponent]
    });
    fixture = TestBed.createComponent(CoachPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
