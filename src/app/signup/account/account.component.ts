import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;
  @Input() percentBar: number;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.percentBar = 1;
    this._formGroup = this.formBuilder.group({
      email: new FormControl(null),
      uname: new FormControl(null),
      pwd: new FormControl(null),
      cpwd: new FormControl(null)
    });
  }

  ngOnInit(): void {
    
  }

  nextButton(): void {
    
  }
}
