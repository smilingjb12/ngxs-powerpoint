import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FigureAdded, TextFigureAdded } from 'src/app/actions';
import { FigureType, Slide } from 'src/app/model';
import { AppState } from 'src/app/state';

@Component({
  selector: 'app-slide-view-toolbar',
  templateUrl: './slide-view-toolbar.component.html',
  styleUrls: ['./slide-view-toolbar.component.scss']
})
export class SlideViewToolbarComponent implements OnInit {
  public slide: Slide;
  @ViewChild('dropdown') public dropdown: NgbDropdown;

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(AppState.getCurrentSlide)
      .subscribe(slide => {
        this.slide = slide;
      });
  }

  public addText(text: string): void {
    this.dropdown.close();
    this.store.dispatch(new TextFigureAdded(this.slide.id, text));
  }

  public addTriangle(): void {
    this.store.dispatch(new FigureAdded(FigureType.Triangle, this.slide.id));
  }
}
