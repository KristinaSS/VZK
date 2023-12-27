import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilePageComponent } from './view-profile-page.component';

describe('ViewProfilePageComponent', () => {
  let component: ViewProfilePageComponent;
  let fixture: ComponentFixture<ViewProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProfilePageComponent]
    });
    fixture = TestBed.createComponent(ViewProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
