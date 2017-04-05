import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { log } from '../log';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mouse-move',
  templateUrl: '../one-column.html',
  styleUrls: ['../everyScreen.scss']
})
export class MouseMoveComponent implements OnInit {
  column1Title = 'Mouse Coordinates';
  button1Text = 'Start Mouse Capture';
  button2Text = 'Stop Mouse Capture';
  column1 = '';
  subscription: Subscription;
  code =
`button1Action() {
  Observable.fromEvent(document, 'mousemove').subscribe((e: MouseEvent) => {
    console.log(\`(\${e.clientX}, \${e.clientY})\`);
  });
}`;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  button1Action() {
    this.column1 = '';
    this.subscription = Observable.fromEvent(document, 'mousemove').subscribe((e: MouseEvent) => {
      log.bind(this)(1, `(${e.clientX}, ${e.clientY})`);
      this.cd.markForCheck();
    });
  }

  button2Action() {
    this.subscription.unsubscribe();
  }
}
