import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToBottomComponent } from './scroll-to-bottom.component';

describe('ScrollToBottomComponent', () => {
  let component: ScrollToBottomComponent;
  let fixture: ComponentFixture<ScrollToBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
