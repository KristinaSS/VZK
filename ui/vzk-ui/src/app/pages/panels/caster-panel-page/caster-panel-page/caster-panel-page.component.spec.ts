import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasterPanelPageComponent } from './caster-panel-page.component';

describe('CasterPanelPageComponent', () => {
  let component: CasterPanelPageComponent;
  let fixture: ComponentFixture<CasterPanelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasterPanelPageComponent]
    });
    fixture = TestBed.createComponent(CasterPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
