import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { ToastrService } from 'src/app/services/toastr.service';
import { Signup } from '../../models/signup';
import { setProgressbars } from '../store/action/progressbar.actions';
import { addPersonal } from '../store/action/singup.actions';
import { getPersonalData } from '../store/selector/signup.selectors';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public _formGroup: FormGroup;
  public userPersonal: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formStore: Store<Signup>,
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
    // Toastr init
    this.toastr.toasts = [];
    // Set Animation
    setTimeout(
      () => {
        // Push Progressbar to Store
        this.progressStore.dispatch(setProgressbars({progress: 2}));
      },
      20
    )
    // Get Data from Store
    this.formStore.select(getPersonalData).forEach( data => this.userPersonal = data);
    this._formGroup.setValue(this.userPersonal);
  }

  nextButton(): void {
    // Cek Valid
    if( !this._formGroup.valid ) {
      this.toastr.show('', 'Form required');
    } else {
      this.formStore.dispatch(addPersonal(this._formGroup.value));
      this.router.navigate(['signup/image']);       
    }
  }

  prevButton(): void {
    this.router.navigate(['signup/account']);
  }
}
