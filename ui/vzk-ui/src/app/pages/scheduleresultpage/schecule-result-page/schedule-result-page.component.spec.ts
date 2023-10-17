import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleResultPageComponent } from './schedule-result-page.component';

describe('ScheculeResultPageComponent', () => {
  let component: ScheduleResultPageComponent;
  let fixture: ComponentFixture<ScheduleResultPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleResultPageComponent]
    });
    fixture = TestBed.createComponent(ScheduleResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
