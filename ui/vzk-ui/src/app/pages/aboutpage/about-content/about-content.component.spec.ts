import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContentComponent } from './about-content.component';

describe('AboutContentComponent', () => {
  let component: AboutContentComponent;
  let fixture: ComponentFixture<AboutContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutContentComponent]
    });
    fixture = TestBed.createComponent(AboutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
