import { Component, Input, OnInit } from '@angular/core';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { SlideRemoved, SlideSelected } from 'src/app/actions';
import { Slide } from 'src/app/model';
import { AppState } from 'src/app/state';

@Component({
  selector: 'app-slide-preview',
  templateUrl: './slide-preview.component.html',
  styleUrls: ['./slide-preview.component.scss']
})
export class SlidePreviewComponent implements OnInit {
  @Input() public slide: Slide;
  @Input() public index: number;
  public isSelected = false;

  constructor(
    private store: Store,
    private actions: Actions) { }

  public ngOnInit(): void {
    this.actions.pipe(ofActionSuccessful(SlideSelected))
      .subscribe((action: SlideSelected) => {
        this.isSelected = action.id === this.slide.id;
      });
  }

  public removeSlide(): void {
    this.store.dispatch(new SlideRemoved(this.slide.id));
  }

  public selectSlide(): void {
    this.store.dispatch(new SlideSelected(this.slide.id));
  }
}
