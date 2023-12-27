import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminContentComponent } from './view-admin-content.component';

describe('ViewAdminContentComponent', () => {
  let component: ViewAdminContentComponent;
  let fixture: ComponentFixture<ViewAdminContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAdminContentComponent]
    });
    fixture = TestBed.createComponent(ViewAdminContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
