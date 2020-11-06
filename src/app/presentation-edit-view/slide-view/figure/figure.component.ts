import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FigureMoved } from 'src/app/actions';
import { Figure, FigureType, Point, TextFigure } from 'src/app/model';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {
  @Input() public figure: Figure;

  constructor(private store: Store) { }

  public ngOnInit(): void {
  }

  public moveRight(): void {
    const newPoint = { x: this.figure.position.x + 20, y: this.figure.position.y } as Point;
    this.store.dispatch(new FigureMoved(this.figure.id, newPoint));
  }

  public isTriangle(): boolean {
    return this.figure.type === FigureType.Triangle;
  }

  public isText(): boolean {
    return this.figure.type === FigureType.Text;
  }

  public get textFigure(): TextFigure {
    return this.figure as TextFigure;
  }
}
