import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNewsBoxComponent } from './news-news-box.component';

describe('NewsNewsBoxComponent', () => {
  let component: NewsNewsBoxComponent;
  let fixture: ComponentFixture<NewsNewsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsNewsBoxComponent]
    });
    fixture = TestBed.createComponent(NewsNewsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
