import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Signup } from 'src/app/models/signup';
import { addUsers } from '../store/action/user.actions';
import { UserState } from '../store/reducer/user.reducer';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<UserState>
  ) {
    this._formGroup = this.formBuilder.group({
      email: new FormControl(null),
      uname: new FormControl(null),
      pwd: new FormControl(null),
      cpwd: new FormControl(null)
    });
  }

  ngOnInit(): void {
    const users = new Signup();
    users.progressBar = 1;
    this.store.dispatch(addUsers(users));
  }

  nextButton(): void {
    
  }

  ngAfterViewInit(): void {
  }
}
