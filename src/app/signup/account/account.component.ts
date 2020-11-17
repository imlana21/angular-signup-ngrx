import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
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
    this.router.navigate(['signup/personal']);
  }

  ngAfterViewInit(): void {
  }
}
