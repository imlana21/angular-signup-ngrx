import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Signup } from '../../models/signup';
import { addAccount } from '../store/action/singup.actions';
import * as progressAction from '../store/action/progressbar.actions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<Signup>
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
    this.store.dispatch(progressAction.incProgressbars());
    this.store.dispatch(addAccount(this._formGroup.value));
    this.router.navigate(['signup/personal']);
  }

  ngAfterViewInit(): void {
  }
}
