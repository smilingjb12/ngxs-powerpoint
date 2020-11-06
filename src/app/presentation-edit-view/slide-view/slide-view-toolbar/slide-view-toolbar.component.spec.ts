import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideViewToolbarComponent } from './slide-view-toolbar.component';

describe('SlideViewToolbarComponent', () => {
  let component: SlideViewToolbarComponent;
  let fixture: ComponentFixture<SlideViewToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideViewToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideViewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
