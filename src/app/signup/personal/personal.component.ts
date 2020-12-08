import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { ToastrService } from 'src/app/services/toastr.service';
import { Signup } from '../../models/signup';
import { setProgressbars } from '../store/action/progressbar.actions';
import { addPersonal } from '../store/action/singup.actions';


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
    private store: Store<Signup>,
    private progressStore: Store<Progressbar>,
    private toastr: ToastrService
  ) { 
    this._formGroup = this.formBuilder.group({
      fname: new FormControl(null, Validators.required), 
      lname: new FormControl(null, Validators.required), 
      phno: new FormControl(null, Validators.required), 
      phno_2: new FormControl(null)
    });

  }

  ngOnInit(): void {
    this.toastr.toasts = [];
    setTimeout(
      () => {
        this.progressStore.dispatch(setProgressbars({progress: 2}));
      },
      20
    )
    
  }

  nextButton(): void {
    if( !this._formGroup.valid ) {
      this.toastr.show('', 'Form required');
    } else {
      this.store.dispatch(addPersonal(this._formGroup.value));
      this.router.navigate(['signup/image']);       
    }
  }

  prevButton(): void {
    this.router.navigate(['signup/account']);
  }
}
