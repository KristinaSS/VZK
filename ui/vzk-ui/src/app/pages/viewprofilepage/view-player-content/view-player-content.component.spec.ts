import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlayerContentComponent } from './view-player-content.component';

describe('ViewPlayerContentComponent', () => {
  let component: ViewPlayerContentComponent;
  let fixture: ComponentFixture<ViewPlayerContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlayerContentComponent]
    });
    fixture = TestBed.createComponent(ViewPlayerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
