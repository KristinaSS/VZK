import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBackgroundComponent } from './dynamic-background.component';

describe('DynamicBackgroundComponent', () => {
  let component: DynamicBackgroundComponent;
  let fixture: ComponentFixture<DynamicBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicBackgroundComponent]
    });
    fixture = TestBed.createComponent(DynamicBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
