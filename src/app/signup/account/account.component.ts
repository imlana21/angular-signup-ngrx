import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public _formGroup: FormGroup;
  user$: Observable<{}>;

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
    this.user$ = this.store.select('account')
  }

  nextButton(): void {
    this.store.dispatch
    this.router.navigate(['signup/personal']);
  }

  ngAfterViewInit(): void {
  }
}
