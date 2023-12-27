import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileContentComponent } from './view-profile-content.component';

describe('ViewProfileContentComponent', () => {
  let component: ViewProfileContentComponent;
  let fixture: ComponentFixture<ViewProfileContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProfileContentComponent]
    });
    fixture = TestBed.createComponent(ViewProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
