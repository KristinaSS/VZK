import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsBannerComponent } from './top-news-banner.component';

describe('TopNewsBannerComponent', () => {
  let component: TopNewsBannerComponent;
  let fixture: ComponentFixture<TopNewsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNewsBannerComponent]
    });
    fixture = TestBed.createComponent(TopNewsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
