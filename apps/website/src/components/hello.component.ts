import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <button (click)="emit()">Progress</button>
    <p>{{text$ | async }}</p>
  `,
})
export class HelloComponent {

  public clicks$: Subject<string> = new Subject();
  public text$: BehaviorSubject<string> = new BehaviorSubject('🟢');

  public ngOnInit() {
    this.clicks$.subscribe(content => this.text$.next(this.text$.value + content));
  }

  public emit() {
    this.clicks$.next('🟢');
  }
}