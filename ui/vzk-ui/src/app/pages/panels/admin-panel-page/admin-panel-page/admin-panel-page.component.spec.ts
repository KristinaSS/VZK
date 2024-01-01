import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelPageComponent } from './admin-panel-page.component';

describe('AdminPanelPageComponent', () => {
  let component: AdminPanelPageComponent;
  let fixture: ComponentFixture<AdminPanelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPanelPageComponent]
    });
    fixture = TestBed.createComponent(AdminPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
