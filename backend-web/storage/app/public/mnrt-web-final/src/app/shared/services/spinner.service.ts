import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count = 0;
  private spinner$ = new BehaviorSubject<string>('');
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isCMSLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  //language change tracking
  public selected_lang: BehaviorSubject<string> = new BehaviorSubject<string>('Sw');

  constructor() { }

  getSpinnerObserver(): Observable<string> {
    return this.spinner$.asObservable();
  }

  requestStarted() {
    if (++this.count === 1) {
      this.spinner$.next('start');
    }
  }

  requestEnded() {
    if (this.count === 0 || --this.count === 0) {
      this.spinner$.next('stop');
    }
  }

  resetSpinner() {
    this.count = 0;
    this.spinner$.next('stop');
  }
}