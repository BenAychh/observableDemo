import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { log } from '../log';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-smart-cancelling',
  templateUrl: '../one-column.html',
  styleUrls: ['../everyScreen.scss']
})
export class SmartCancellingComponent implements OnInit {
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
  this.observable.take(10).subscribe((response) => {
    console.log(response);
  });
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
    this.observable.take(10).subscribe((response) => {
      log.bind(this)(1, response);
      this.cd.markForCheck();
    });
  }
}
