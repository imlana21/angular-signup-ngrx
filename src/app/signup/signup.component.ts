import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProgressbarComponent } from './_component/progressbar/progressbar.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
