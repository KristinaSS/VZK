import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInterstedComponent } from './about-intersted.component';

describe('AboutInterstedComponent', () => {
  let component: AboutInterstedComponent;
  let fixture: ComponentFixture<AboutInterstedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInterstedComponent]
    });
    fixture = TestBed.createComponent(AboutInterstedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
