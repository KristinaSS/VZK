import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCasterContentComponent } from './view-caster-content.component';

describe('ViewCasterContentComponent', () => {
  let component: ViewCasterContentComponent;
  let fixture: ComponentFixture<ViewCasterContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCasterContentComponent]
    });
    fixture = TestBed.createComponent(ViewCasterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
