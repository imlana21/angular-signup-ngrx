import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Signup } from '../../../models/signup';
import { UserState } from '../../store/reducer/user.reducer';
import { selectSignup } from '../../store/selector/user.selectors';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [NgbProgressbarConfig],
})

export class ProgressbarComponent {
  progressNumber: Observable<Signup[]>

  constructor(
    private barConfig: NgbProgressbarConfig,
    private store: Store<UserState>
  ) {
    // Configurasi Progress Bar
    this.barConfig.max = 4;
    this.barConfig.striped = true;
    this.barConfig.animated = true;
    this.barConfig.height = '20px';
    this.progressNumber = this.store.pipe(select(selectSignup));
    console.log(this.progressNumber)
  }
}
