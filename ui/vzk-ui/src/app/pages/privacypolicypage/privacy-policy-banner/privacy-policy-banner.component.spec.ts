import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyBannerComponent } from './privacy-policy-banner.component';

describe('PrivacyPolicyBannerComponent', () => {
  let component: PrivacyPolicyBannerComponent;
  let fixture: ComponentFixture<PrivacyPolicyBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyBannerComponent]
    });
    fixture = TestBed.createComponent(PrivacyPolicyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
