import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<any>(null);
  toastState$ = this.toastSubject.asObservable();

  constructor() {}

  showToast(type: string, message: string) {
    this.toastSubject.next({ type, message });
  }

  hideToast() {
    this.toastSubject.next(null);
  }
}
