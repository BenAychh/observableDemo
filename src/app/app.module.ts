import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabViewModule } from 'primeng/primeng';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './app.component';
import { ViewObservableComponent } from './view-observable/view-observable.component';
import { MouseMoveComponent } from './mouse-move/mouse-move.component';
import { PromisesVsObservablesComponent } from './promises-vs-observables/promises-vs-observables.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { CancellableComponent } from './cancellable/cancellable.component';
import { SmartCancellingComponent } from './smart-cancelling/smart-cancelling.component';
import { MouseCancelClickComponent } from './mouse-cancel-click/mouse-cancel-click.component';
import { MousePositionCancelComponent } from './mouse-position-cancel/mouse-position-cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewObservableComponent,
    MouseMoveComponent,
    PromisesVsObservablesComponent,
    ErrorHandlingComponent,
    CancellableComponent,
    SmartCancellingComponent,
    MouseCancelClickComponent,
    MousePositionCancelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabViewModule,
    HighlightJsModule,
  ],
  providers: [ HighlightJsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
