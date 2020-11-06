import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesActionbarComponent } from './slides-actionbar.component';

describe('SlidesActionbarComponent', () => {
  let component: SlidesActionbarComponent;
  let fixture: ComponentFixture<SlidesActionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesActionbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
