import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Signup } from 'src/app/models/signup';
import { addUsers } from '../store/action/signup.actions';
import { UserState } from '../store/reducer/signup.reducer';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<UserState>
  ) { 
    this._formGroup = this.formBuilder.group({
      fname: new FormControl(null), 
      lname: new FormControl(null), 
      phno: new FormControl(null), 
      phno_2: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  nextButton(): void {
    const users = new Signup();
    users.personal = this._formGroup.value;
    this.store.dispatch(addUsers(users));
    this.router.navigate(['signup/image']); 
  }

  prevButton(): void {
    this.router.navigate(['signup/account']);
  }
}
