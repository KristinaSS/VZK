import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsBoxComponent } from './teams-box.component';

describe('TeamsBoxComponent', () => {
  let component: TeamsBoxComponent;
  let fixture: ComponentFixture<TeamsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsBoxComponent]
    });
    fixture = TestBed.createComponent(TeamsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
