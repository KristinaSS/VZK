import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileBannerComponent } from './view-profile-banner.component';

describe('ViewProfileBannerComponent', () => {
  let component: ViewProfileBannerComponent;
  let fixture: ComponentFixture<ViewProfileBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProfileBannerComponent]
    });
    fixture = TestBed.createComponent(ViewProfileBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
