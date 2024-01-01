import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPanelPageComponent } from './partner-panel-page.component';

describe('PartnerPanelPageComponent', () => {
  let component: PartnerPanelPageComponent;
  let fixture: ComponentFixture<PartnerPanelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerPanelPageComponent]
    });
    fixture = TestBed.createComponent(PartnerPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
