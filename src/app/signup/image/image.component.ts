import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Signup } from 'src/app/models/signup';
import { addUsers } from '../store/action/signup.actions';
import { UserState } from '../store/reducer/signup.reducer';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<UserState>,
    private router: Router
  ) {
    this._formGroup = this.formBuilder.group({
      pic: new FormControl(null), 
      sigpic: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  nextButton(): void {
    const users = new Signup();
    users.image = this._formGroup.value;
    this.store.dispatch(addUsers(users));
    this.router.navigate(['signup/success']); 
  }

  prevButton(): void {
    this.router.navigate(['signup/personal']);
  }
}
