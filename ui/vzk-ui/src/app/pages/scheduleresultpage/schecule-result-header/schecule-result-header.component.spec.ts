import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheculeResultHeaderComponent } from './schecule-result-header.component';

describe('ScheculeResultHeaderComponent', () => {
  let component: ScheculeResultHeaderComponent;
  let fixture: ComponentFixture<ScheculeResultHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheculeResultHeaderComponent]
    });
    fixture = TestBed.createComponent(ScheculeResultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
