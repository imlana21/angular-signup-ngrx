import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { addPersonal } from '../store/action/singup.actions';
import { State } from '../store/reducer/singup.reducer';
import * as signupSelector from '../store/selector/signup.selectors';
import { Signup } from '../../models/signup';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public _formGroup: FormGroup;
  private data: Signup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<State>
  ) { 
    this._formGroup = this.formBuilder.group({
      fname: new FormControl(null), 
      lname: new FormControl(null), 
      phno: new FormControl(null), 
      phno_2: new FormControl(null)
    });

  }

  ngOnInit(): void {
    
  }

  nextButton(): void {
    this.store.dispatch(addPersonal(this._formGroup.value))
    //this.router.navigate(['signup/image']); 
  }

  prevButton(): void {
    this.router.navigate(['signup/account']);
  }
}
