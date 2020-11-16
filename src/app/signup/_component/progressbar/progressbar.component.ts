import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Signup } from '../../../models/signup';
import { UserState } from '../../store/reducer/signup.reducer';
import { selectSignup } from '../../store/selector/signup.selectors';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [NgbProgressbarConfig],
})

export class ProgressbarComponent {
  progressNumber: any;
  observable$: Observable<Signup[]>;

  constructor(
    private barConfig: NgbProgressbarConfig,
    private store: Store<UserState>
  ) {
    // Configurasi Progress Bar
    this.barConfig.max = 4;
    this.barConfig.striped = true;
    this.barConfig.animated = true;
    this.barConfig.height = '20px';
    this.progressNumber = 1;
    this.observable$ = this.store.pipe(select(selectSignup));
  }
}
