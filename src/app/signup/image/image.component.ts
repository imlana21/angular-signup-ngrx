import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Signup } from '../../models/signup';
import { addImage } from '../store/action/singup.actions';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<Signup>
  ) {
    this._formGroup = this.formBuilder.group({
      pic: new FormControl(null), 
      sigpic: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  nextButton(): void {
    console.log(this._formGroup.value);
    this.store.dispatch(addImage(this._formGroup.value));
    //this.router.navigate(['signup/success']); 
  }

  prevButton(): void {
    this.router.navigate(['signup/personal']);
  }
}
