import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { ToastrService } from 'src/app/services/toastr.service';
import { Signup } from '../../models/signup';
import { setProgressbars } from '../store/action/progressbar.actions';
import { addAccount } from '../store/action/singup.actions';
import { getAccountData } from '../store/selector/signup.selectors';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;
  public userAccount: any;
  @ViewChild('nextBt') next: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private formStore: Store<Signup>,
    private progressStore: Store<Progressbar>,
    private toastr: ToastrService
  ) {
    this._formGroup = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      uname: new FormControl(null, Validators.required),
      pwd: new FormControl(null, Validators.required),
      cpwd: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    // Init Toastr
    this.toastr.toasts = [];
    // Animation Progressbar
    setTimeout(
      () => {
        // Push Data ke Store
        this.progressStore.dispatch(setProgressbars({progress: 1}))
      },
      20
    );
    // Get data from Store
    this.formStore.select(getAccountData).forEach( data => this.userAccount = data);
    this._formGroup.setValue(this.userAccount);
    if(this.userAccount === []) this.router.navigate(['signup/personal']);
  } 

  nextButton(): void {
    if( !this._formGroup.valid) {
      if( !this._formGroup.get('email').valid ) {
        this.toastr.show('', 'Format Email Salah');
      } else {
        this.toastr.show('', 'Form required');
      }
    } else {
      this.formStore.dispatch(addAccount(this._formGroup.value));
      this.router.navigate(['signup/personal']);
    }
  }
}
