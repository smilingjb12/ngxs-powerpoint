import { Figure, FigureType, Point } from './model';

export class FetchSlides {
  static readonly type = 'FetchSlides';
  constructor() { }
}

export class FetchFigures {
  static readonly type = 'FetchFigures';
  constructor(public slideId: number) { }
}

export class SlideAdded {
  static readonly type = 'SlideAdded';
  constructor() { }
}

export class SlideRemoved {
  static readonly type = 'SlideRemoved';
  constructor(public id: number) { }
}

export class SlideSelected {
  static readonly type = 'SlideSelected';
  constructor(public id: number) { }
}

export class FigureAdded {
  static readonly type = 'FigureAdded';
  constructor(public figureType: FigureType, public slideId: number) { }
}

export class TextFigureAdded {
  static readonly type = 'TextFigureAdded';
  constructor(public slideId: number, public text: string) { }
}

export class FigureMoved {
  static readonly type = 'FigureMoved';
  constructor(public figureId: number, public newPoint: Point) { }
}
