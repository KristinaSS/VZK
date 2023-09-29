import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchBoxComponent } from './twitch-box.component';

describe('TwitchBoxComponent', () => {
  let component: TwitchBoxComponent;
  let fixture: ComponentFixture<TwitchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitchBoxComponent]
    });
    fixture = TestBed.createComponent(TwitchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
