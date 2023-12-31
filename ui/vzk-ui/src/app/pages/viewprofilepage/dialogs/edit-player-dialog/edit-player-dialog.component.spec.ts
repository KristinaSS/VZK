import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayerDialogComponent } from './edit-player-dialog.component';

describe('EditPlayerDialogComponent', () => {
  let component: EditPlayerDialogComponent;
  let fixture: ComponentFixture<EditPlayerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPlayerDialogComponent]
    });
    fixture = TestBed.createComponent(EditPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
