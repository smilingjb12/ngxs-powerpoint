import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import produce from 'immer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SlideAdded, FetchSlides, SlideRemoved, SlideSelected, FigureAdded, FigureMoved, FetchFigures, TextFigureAdded } from './actions';
import { BackendService } from './backend.service';
import { Figure, FigureType, Slide } from "./model";

interface AppStateModel {
  slides: Slide[];
  figures: Figure[];
  currentSlide: Slide;
}

@State<AppStateModel>({
  name: 'presentation',
  defaults: {
    slides: [],
    figures: [],
    currentSlide: null
  }
})
@Injectable()
export class AppState {
  @Selector()
  public static getSlides(state: AppStateModel): Slide[] {
    return state.slides;
  }

  @Selector()
  public static getCurrentSlide(state: AppStateModel): Slide {
    return state.currentSlide;
  }

  @Selector()
  public static getFigures(state: AppStateModel): Figure[] {
    return state.figures;
  }

  constructor(private backend: BackendService) {
  }

  @Action(FetchSlides)
  fetchSlides(ctx: StateContext<AppStateModel>, action: FetchSlides): Observable<Slide[]> {
    return this.backend.fetchSlides().pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.slides = result;
      });
      ctx.setState(newState);
    }));
  }

  @Action(FetchFigures)
  fetchFigures(ctx: StateContext<AppStateModel>, action: FetchFigures): Observable<Figure[]> {
    return this.backend.fetchFigures(action.slideId).pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.figures = result;
      });
      ctx.setState(newState);
    }));
  }

  @Action(SlideAdded)
  addSlide(ctx: StateContext<AppStateModel>, action: SlideAdded): Observable<Slide> {
    return this.backend.addSlide().pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.slides = [...draft.slides, result];
      });
      ctx.setState(newState);
    }));
  }

  @Action(SlideRemoved)
  removeSlide(ctx: StateContext<AppStateModel>, action: SlideRemoved): Observable<number> {
    return this.backend.removeSlide(action.id).pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.slides = draft.slides.filter(s => s.id !== action.id);
        if (action.id === draft.currentSlide?.id) {
          draft.currentSlide = null;
        }
      });
      ctx.setState(newState);
    }));
  }

  @Action(SlideSelected)
  selectSlide(ctx: StateContext<AppStateModel>, action: SlideSelected) {
    return this.backend.fetchSlide(action.id).pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.currentSlide = result;
      });
      ctx.setState(newState);
    }));
  }

  @Action(FigureAdded)
  addFigure(ctx: StateContext<AppStateModel>, action: FigureAdded) {
    return this.backend.addFigure(action.slideId, action.figureType).pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.figures.push(result);
      });
      ctx.setState(newState);
    }));
  }

  @Action(TextFigureAdded)
  addTextFigure(ctx: StateContext<AppStateModel>, action: TextFigureAdded) {
    return this.backend.addTextFigure(action.slideId, action.text).pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        draft.figures.push(result);
      });
      ctx.setState(newState);
    }));
  }

  @Action(FigureMoved)
  moveFigure(ctx: StateContext<AppStateModel>, action: FigureMoved) {
    return this.backend.moveFigure(action.figureId, action.newPoint).pipe(tap(result => {
      const newState = produce(ctx.getState(), draft => {
        const figureIndex = draft.figures.findIndex(f => f.id === result.id);
        draft.figures[figureIndex] = result;
      });
      ctx.setState(newState);
    }));
  }
}