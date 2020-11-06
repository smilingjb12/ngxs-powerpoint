import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Figure, FigureType, Point, Slide, TextFigure } from './model';
import { cloneDeep } from 'lodash';

const DATA = {
  SLIDES: [
    {
      id: 1
    }
  ] as Slide[],
  FIGURES: [

  ] as Figure[],
  TEXTS: [

  ] as Text[]
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  public fetchSlides(): Observable<Slide[]> {
    return of(cloneDeep(DATA.SLIDES));
  }

  public fetchSlide(id: number): Observable<Slide> {
    const slide = DATA.SLIDES.find(s => s.id === id);
    return of(cloneDeep(slide));
  }

  public removeSlide(id: number): Observable<number> {
    const index = DATA.SLIDES.findIndex(s => s.id === id);
    DATA.SLIDES.splice(index, 1);
    return of(id);
  }

  public addSlide(): Observable<Slide> {
    const slide = { id: BackendService.makeId(), figures: [] } as Slide;
    DATA.SLIDES.push(slide);
    return of(cloneDeep(slide));
  }

  public moveFigure(figureId: number, newPoint: Point): Observable<Figure> {
    const dbFigure = DATA.FIGURES.find(f => f.id === figureId);
    dbFigure.position.x = newPoint.x;
    dbFigure.position.y = newPoint.y;
    return of(cloneDeep(dbFigure));
  }

  public fetchFigures(slideId: number): Observable<Figure[]> {
    const figures = DATA.FIGURES.filter(f => f.slideId === slideId);
    return of(cloneDeep(figures));
  }

  public addTextFigure(slideId: number, text: string): Observable<Figure> {
    const figure = {
      id: BackendService.makeId(),
      slideId,
      type: FigureType.Text,
      position: { x: 0, y: 0 },
      text
    } as TextFigure;
    DATA.FIGURES.push(figure);
    return of(cloneDeep(figure));
  }

  public addFigure(slideId: number, figureType: FigureType): Observable<Figure> {
    const figure = {
      id: BackendService.makeId(),
      slideId,
      type: figureType,
      position: { x: 0, y: 0 }
    } as Figure;
    DATA.FIGURES.push(figure);
    return of(cloneDeep(figure));
  }

  private static makeId(): number {
    return Math.random() * 10000000000;
  }
}
