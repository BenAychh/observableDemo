import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { log } from '../log';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mouse-cancel-click',
  templateUrl: '../one-column.html',
  styleUrls: ['../everyScreen.scss']
})
export class MouseCancelClickComponent implements OnInit {
  column1Title = 'Mouse Coordinates';
  button1Text = 'Start Mouse Capture';
  column1 = '';
  code =
`button1Action() {
  Observable.fromEvent(document, 'mousemove')
            .takeUntil(this.clickObservable())
            .subscribe((e: MouseEvent) => {
              log.bind(this)(1, \`(\${e.clientX}, \${e.clientY})\`);
              this.cd.markForCheck();
            });
}

clickObservable() {
  return new Observable((observer) => {
    setTimeout(() => Observable.fromEvent(document, 'click').subscribe(observer), 100);
  });
}`;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  button1Action() {
    this.column1 = '';
    Observable.fromEvent(document, 'mousemove')
              .takeUntil(this.clickObservable())
              .subscribe((e: MouseEvent) => {
                log.bind(this)(1, `(${e.clientX}, ${e.clientY})`);
                this.cd.markForCheck();
              });
  }

  clickObservable() {
    return new Observable((observer) => {
      setTimeout(() => Observable.fromEvent(document, 'click').subscribe(observer), 100);
    });
  }
}
