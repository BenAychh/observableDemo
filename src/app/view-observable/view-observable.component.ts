import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
import { log } from '../log';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-view-observable',
  templateUrl: '../three-column.html',
  styleUrls: ['../everyScreen.scss'],
})
export class ViewObservableComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  column1Title = 'Observable';
  column2Title = 'Basic Subscription';
  column3Title = '2 Second Delay';
  column1 = '';
  column2 = '';
  column3 = '';
  button1Text = 'Start!';
  button2Text = 'End!';
  code = `const observable = Observable.interval(1000);`;
  code1 = '';
  code2 = `
observable.subscribe(result => {
  this.column2 = \`\${this.column2}<br>\${result}\`;
});
`;
  code3 = `
setTimeout(() => {
  sub3 = observable.subscribe(result => {
    this.column3 = \`\${this.column3}<br>\${result}\`;
  });
}, 2000);`;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  button1Action() {
    this.column1 = '';
    this.column2 = '';
    this.column3 = '';
    const observable = Observable.interval(1000);
    this.sub1 = observable.subscribe(result => {
      log.bind(this)(1, result);
      this.cd.markForCheck();
    });

    this.sub2 = observable.subscribe(result => {
      log.bind(this)(2, result);
      this.cd.markForCheck();
    });

    setTimeout(() => {
      this.sub3 = observable.subscribe(result => {
        log.bind(this)(3, result);
        this.cd.markForCheck();
      });
    }, 2000);
  }

  button2Action() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

}
