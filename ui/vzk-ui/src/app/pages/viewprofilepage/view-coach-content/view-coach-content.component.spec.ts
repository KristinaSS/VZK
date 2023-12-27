import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoachContentComponent } from './view-coach-content.component';

describe('ViewCoachContentComponent', () => {
  let component: ViewCoachContentComponent;
  let fixture: ComponentFixture<ViewCoachContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCoachContentComponent]
    });
    fixture = TestBed.createComponent(ViewCoachContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
