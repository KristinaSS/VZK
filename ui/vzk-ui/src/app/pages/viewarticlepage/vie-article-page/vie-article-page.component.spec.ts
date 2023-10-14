import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieArticlePageComponent } from './vie-article-page.component';

describe('VieArticlePageComponent', () => {
  let component: VieArticlePageComponent;
  let fixture: ComponentFixture<VieArticlePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieArticlePageComponent]
    });
    fixture = TestBed.createComponent(VieArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
