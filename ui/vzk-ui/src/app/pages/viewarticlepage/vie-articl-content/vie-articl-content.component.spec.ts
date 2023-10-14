import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieArticlContentComponent } from './vie-articl-content.component';

describe('VieArticlContentComponent', () => {
  let component: VieArticlContentComponent;
  let fixture: ComponentFixture<VieArticlContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieArticlContentComponent]
    });
    fixture = TestBed.createComponent(VieArticlContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
