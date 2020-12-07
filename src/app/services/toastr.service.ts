import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  public toasts: any[] = [];

  constructor(
  ) { }

  show(header: string, body: any = {}): void {
    this.toasts.push({header, body});
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(
      data => data != toast
    )
  }
}
