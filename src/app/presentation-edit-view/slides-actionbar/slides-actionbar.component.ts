import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SlideAdded } from 'src/app/actions';

@Component({
  selector: 'app-slides-actionbar',
  templateUrl: './slides-actionbar.component.html',
  styleUrls: ['./slides-actionbar.component.scss']
})
export class SlidesActionbarComponent implements OnInit {

  constructor(private store: Store) { }

  public ngOnInit(): void {
  }

  public addSlide(): void {
    this.store.dispatch(new SlideAdded());
  }
}
