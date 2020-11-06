import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEditViewComponent } from './presentation-edit-view.component';

describe('PresentationEditViewComponent', () => {
  let component: PresentationEditViewComponent;
  let fixture: ComponentFixture<PresentationEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
