import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInterestedComponent } from './about-interested.component';

describe('AboutInterstedComponent', () => {
  let component: AboutInterestedComponent;
  let fixture: ComponentFixture<AboutInterestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInterestedComponent]
    });
    fixture = TestBed.createComponent(AboutInterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
