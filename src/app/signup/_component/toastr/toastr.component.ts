import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-toastr',
  template: `
    <ngb-toast 
      *ngFor="let toast of toastService.toasts" 
      [header]="toast.header" 
      [autohide]="true" 
      [delay]="toast.delay || 5000" 
      (hide)="toastService.remove(toast)"
    >
      {{toast.body}}
    </ngb-toast>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      right: 0;
      margin: 0.5em;
      z-index: 1200;
    }
  `]
})
export class ToastrComponent implements OnInit {

  constructor(
    public toastService: ToastrService
  ) { }

  ngOnInit(): void {
  }

}
