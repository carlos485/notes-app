import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<boolean | null>(null);
  loaderState$ = this.loaderSubject.asObservable();

  constructor() {}

  setValue(value: boolean) {
    this.loaderSubject.next(value);
  }
}
