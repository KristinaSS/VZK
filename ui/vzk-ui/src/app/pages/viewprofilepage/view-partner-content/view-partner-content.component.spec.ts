import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartnerContentComponent } from './view-partner-content.component';

describe('ViewPartnerContentComponent', () => {
  let component: ViewPartnerContentComponent;
  let fixture: ComponentFixture<ViewPartnerContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPartnerContentComponent]
    });
    fixture = TestBed.createComponent(ViewPartnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
