import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDialogComponent } from './sign-up-dialog.component';

describe('SignUpDialogComponent', () => {
  let component: SignUpDialogComponent;
  let fixture: ComponentFixture<SignUpDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpDialogComponent]
    });
    fixture = TestBed.createComponent(SignUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
