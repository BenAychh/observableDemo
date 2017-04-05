import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { log } from '../log';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-promises-vs-observables',
  templateUrl: '../two-column.html',
  styleUrls: ['../everyScreen.scss']
})
export class PromisesVsObservablesComponent implements OnInit {
  promise: Promise<number>;
  observable: Observable<number>;
  column1Title = 'Promise';
  column2Title = 'Observable';
  column3Title = 'Same Observable';
  column1 = '';
  column2 = '';
  button1Text = 'Then Promise';
  button2Text = 'Subscribe Observable';
  code = `constructor() {
  this.promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().getTime());
    }, 1000);
    console.log('Starting Promise');
  });

  this.observable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(new Date().getTime());
    }, 1000);
    console.log('Starting Observable');
  });
}`;
  code1 =
`button1Action() {
  this.promise.then(response => {
    console.log('Response:', response);
  });
}`;

  code2 =
`button2Action() {
  this.observable.subscribe(response => {
    console.log('Response:', response);
  });
}`;

  constructor(private cd: ChangeDetectorRef) {
    this.promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Date().getTime());
      }, 1000);
      log.bind(this)(1, 'Starting Promise');
      this.cd.markForCheck();
    });

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(new Date().getTime());
      }, 1000);
      log.bind(this)(2, 'Starting Observable');
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
  }

  button1Action() {
    this.promise.then(response => {
      log.bind(this)(1, `Response: ${response}`);
      this.cd.markForCheck();
    });
  }

  button2Action() {
    this.observable.subscribe(response => {
      log.bind(this)(2, `Response: ${response}`);
      this.cd.markForCheck();
    });
  }
}
