import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAchievmentsComponent } from './about-achievments.component';

describe('AboutAchievmentsComponent', () => {
  let component: AboutAchievmentsComponent;
  let fixture: ComponentFixture<AboutAchievmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAchievmentsComponent]
    });
    fixture = TestBed.createComponent(AboutAchievmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
