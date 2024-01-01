import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPanelPageComponent } from './manager-panel-page.component';

describe('ManagerPanelPageComponent', () => {
  let component: ManagerPanelPageComponent;
  let fixture: ComponentFixture<ManagerPanelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerPanelPageComponent]
    });
    fixture = TestBed.createComponent(ManagerPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
