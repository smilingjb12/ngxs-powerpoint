export interface Slide {
  id: number;
}

export interface Figure {
  id: number;
  slideId: number;
  type: FigureType;
  position: Point;
}

export interface Point {
  x: number;
  y: number;
}

export enum FigureType {
  Triangle = 0,
  Text
}

export interface TextFigure extends Figure {
  text: string; g
}