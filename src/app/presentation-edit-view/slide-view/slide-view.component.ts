import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { FetchFigures, FigureAdded, FigureMoved } from 'src/app/actions';
import { Figure, FigureType, Slide } from 'src/app/model';
import { AppState } from 'src/app/state';
import { Subscription } from 'rxjs';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-slide-view',
  templateUrl: './slide-view.component.html',
  styleUrls: ['./slide-view.component.scss']
})
export class SlideViewComponent implements OnInit {
  public slide: Slide;
  @Select(AppState.getFigures) figures: Observable<Figure[]>;

  constructor(
    private store: Store) { }

  public ngOnInit(): void {
    this.store.select(AppState.getCurrentSlide)
      .subscribe(slide => {
        this.slide = slide;
        if (slide) {
          this.store.dispatch(new FetchFigures(slide.id));
        }
      });
  }

  public onDragStopped(e: any, figure: Figure): void {
    const translate = Utils.getTranslate(e);
    const newPoint = {
      x: figure.position.x + translate[0],
      y: figure.position.y + translate[1]
    };
    this.store.dispatch(new FigureMoved(figure.id, newPoint));
  }

  public addText(): void {
    this.store.dispatch(new FigureAdded(FigureType.Text, this.slide.id));
  }

  public addTriangle(): void {
    this.store.dispatch(new FigureAdded(FigureType.Triangle, this.slide.id));
  }
}
