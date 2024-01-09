import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<string | null>(null);
  toastState$ = this.toastSubject.asObservable();

  constructor() {}

  showToast(message: string) {
    this.toastSubject.next(message);
  }

  hideToast() {
    this.toastSubject.next(null);
  }
}
