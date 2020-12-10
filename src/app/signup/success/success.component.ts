import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { Signup } from 'src/app/models/signup';
import { setProgressbars } from '../store/action/progressbar.actions';
import { getUserData } from '../store/selector/signup.selectors';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    private progressStore: Store<Progressbar>,
    private formStore: Store<Signup>
  ) {
  }

  ngOnInit( ): void {
    setTimeout(
      () => {
        this.progressStore.dispatch(setProgressbars({progress: 4}))
      },
      20
    );
    
    this.formStore.select(getUserData).forEach(data => {
      this.user = data
    })
    console.log(this.user);
    
  }

  previewButton(): void {
    this.router.navigate(['signup'])
  }
}
