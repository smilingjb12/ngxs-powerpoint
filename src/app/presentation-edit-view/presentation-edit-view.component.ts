import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchSlides } from '../actions';
import { Slide } from '../model';
import { AppState } from '../state';

@Component({
  selector: 'app-presentation-edit-view',
  templateUrl: './presentation-edit-view.component.html',
  styleUrls: ['./presentation-edit-view.component.scss']
})
export class PresentationEditViewComponent implements OnInit {
  public slides: Slide[];

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(new FetchSlides());
    this.store.select(AppState.getSlides)
      .subscribe(slides => {
        this.slides = slides
      });
  }

}
