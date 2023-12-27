import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManagerContentComponent } from './view-manager-content.component';

describe('ViewManagerContentComponent', () => {
  let component: ViewManagerContentComponent;
  let fixture: ComponentFixture<ViewManagerContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewManagerContentComponent]
    });
    fixture = TestBed.createComponent(ViewManagerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
