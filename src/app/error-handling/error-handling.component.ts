import { Observable, Subscriber } from 'rxjs/Rx';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { log } from '../log';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-error-handling',
  templateUrl: '../two-column.html',
  styleUrls: ['../everyScreen.scss']
})
export class ErrorHandlingComponent implements OnInit {
  observable1: Observable<string>;
  observable2: Observable<string>;
  column1Title = 'Retry is amazing!';
  column2Title = 'But you have to be persistent';
  column1 = '';
  column2 = '';
  button1Text = 'Let errors = handled;';
  button2Text = 'apathy and weakness';
  callCount = 3;
  code =
`constructor() {
  this.observable = new Observable((observer: Subscriber<string>) => {
    this.someAsyncFunction(observer);
  });
}

someAsyncFunction(observer: Subscriber<string>) {
  setTimeout(() => {
    if (this.callCount-- > 0) {
      observer.error('Not low enough yet');
    } else {
      observer.next('You retried enough times! So persistant');
    }
  }, 1000);
}`;
  code1 =
`button1Action() {
  this.callCount = 2;
  const handleSuccess = (response) => {
    console.log('Yay!', response});
  };
  const handleFailure = (error) => {
    console.error('Should never be called!', error);
  };
  this.observable.retry(3).subscribe(handleSuccess, handleFailure);
}`;

  code2 =
`button2Action() {
  this.callCount = 3;
  const handleSuccess = (response) => {
    console.log('No success for you!', response});
  };
  const handleFailure = (error) => {
    console.error('Fail!', error);
  };
  this.observable.retry(3).subscribe(handleSuccess, handleFailure);
}`;

  constructor(private cd: ChangeDetectorRef) {
    this.observable1 = new Observable((observer: Subscriber<string>) => {
      log.bind(this)(1, 'Observable subscribed');
      this.cd.markForCheck();
      this.someAsyncFunction(observer);
    });

    this.observable2 = new Observable((observer: Subscriber<string>) => {
      log.bind(this)(2, 'Observable subscribed');
      this.cd.markForCheck();
      this.someAsyncFunction(observer);
    });
  }

  someAsyncFunction(observer: Subscriber<string>) {
    setTimeout(() => {
      if (this.callCount-- > 0) {
        observer.error('Not low enough yet');
      } else {
        observer.next('You retried enough times! So persistant');
      }
    }, 1000);
  }

  ngOnInit() {

  }

  button1Action() {
    this.callCount = 2;
    const handleSuccess = (response) => {
      log.bind(this)(1, `Yay! ${response}`);
      this.cd.markForCheck();
    };
    const handleFailure = (error) => {
      log.bind(this)(1, `Should never be called! ${error}`, 'red');
      this.cd.markForCheck();
    };
    this.observable1.retry(3).subscribe(handleSuccess, handleFailure);
  }

  button2Action() {
    this.callCount = 3;
    const handleSuccess = (response) => {
      log.bind(this)(2, `No success for you! ${response}`);
      this.cd.markForCheck();
    };
    const handleFailure = (error) => {
      log.bind(this)(2, `Fail! ${error}`, 'red');
      this.cd.markForCheck();
    };
    this.observable2.retry(2).subscribe(handleSuccess, handleFailure);
  }
}
