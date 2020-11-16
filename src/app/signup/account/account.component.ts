import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Signup } from 'src/app/models/signup';
import { addUsers } from '../store/action/signup.actions';
import { UserState } from '../store/reducer/signup.reducer';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<UserState>,
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
    const users = new Signup();
    users.account = this._formGroup.value;
    this.store.dispatch(addUsers(users));
    this.router.navigate(['signup/personal']);
  }

  ngAfterViewInit(): void {
  }
}
