import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsHeaderComponent } from './terms-header.component';

describe('TermsHeaderComponent', () => {
  let component: TermsHeaderComponent;
  let fixture: ComponentFixture<TermsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsHeaderComponent]
    });
    fixture = TestBed.createComponent(TermsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
