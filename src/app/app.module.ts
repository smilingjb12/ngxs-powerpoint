import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationEditViewComponent } from './presentation-edit-view/presentation-edit-view.component';
import { SlidePreviewComponent } from './presentation-edit-view/slide-preview/slide-preview.component';
import { AppState } from './state';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { SlidesActionbarComponent } from './presentation-edit-view/slides-actionbar/slides-actionbar.component';
import { SlideViewComponent } from './presentation-edit-view/slide-view/slide-view.component';
import { FigureComponent } from './presentation-edit-view/slide-view/figure/figure.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { SlideViewToolbarComponent } from './presentation-edit-view/slide-view/slide-view-toolbar/slide-view-toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PresentationEditViewComponent,
    SlidePreviewComponent,
    SlidesActionbarComponent,
    SlideViewComponent,
    FigureComponent,
    SlideViewToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    AngularDraggableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
