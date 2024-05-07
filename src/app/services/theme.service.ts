import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<any>(null)
  themeState$ = this.themeSubject.asObservable()
  private renderer: Renderer2

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)
    this.checkTheme()
  }

  changeTheme() {
    const currentTheme = localStorage.getItem('theme')
    const isDark = currentTheme === 'dark'
    console.log(isDark)
    if (!isDark) {
      this.renderer.addClass(document.documentElement, 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      this.renderer.removeClass(document.documentElement, 'dark')
      localStorage.setItem('theme', 'light')
    }
  }

  private checkTheme() {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark')
    }
  }
}
