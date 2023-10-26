import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeaderComponent } from './about-header.component';

describe('AboutHeaderComponent', () => {
  let component: AboutHeaderComponent;
  let fixture: ComponentFixture<AboutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutHeaderComponent]
    });
    fixture = TestBed.createComponent(AboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
