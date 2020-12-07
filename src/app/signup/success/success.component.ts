import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { setProgressbars } from '../store/action/progressbar.actions';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
    private router: Router,
    private progressStore: Store<Progressbar>
  ) { }

  ngOnInit( ): void {
    setTimeout(
      () => {
        this.progressStore.dispatch(setProgressbars({progress: 4}))
      },
      20
    );
  }

  prevButton(): void {
    
  }

  previewButton(): void {
    this.router.navigate(['signup'])
  }
}
