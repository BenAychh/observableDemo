import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { log } from '../log';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cancellable',
  templateUrl: '../one-column.html',
  styleUrls: ['../everyScreen.scss']
})
export class CancellableComponent implements OnInit {
  observableStarted = false;
  subscription: Subscription;
  observable: Observable<number>;
  column1 = '';
  button1Text = 'Start Observable';
  code =
`constructor() {
  this.observable = new Observable((observer) => {
    let i = 1;
    const interval = setInterval(() => {
      observer.next(i++);
    });
  });
}

button1Action() {
  if (this.observableStarted) {
    this.button1Text = 'Start Observable';
    this.subscription.unsubscribe();
  } else {
    this.button1Text = 'Stop Observable';
    this.subscription = this.observable.subscribe((response) => {
      console.log(response);
    });
  }
  this.observableStarted = !this.observableStarted;
}`;

  constructor(private cd: ChangeDetectorRef) {
    this.observable = new Observable((observer) => {
      let i = 1;
      const interval = setInterval(() => {
        observer.next(i++);
      });
    });
  }

  ngOnInit() {
  }

  button1Action() {
    if (this.observableStarted) {
      this.button1Text = 'Start Observable';
      this.subscription.unsubscribe();
    } else {
      this.button1Text = 'Stop Observable';
      this.subscription = this.observable.subscribe((response) => {
        log.bind(this)(1, response);
        this.cd.markForCheck();
      });
    }
    this.observableStarted = !this.observableStarted;
  }
}
