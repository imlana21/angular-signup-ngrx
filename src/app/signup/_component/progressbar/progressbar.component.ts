import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [NgbProgressbarConfig],
})

export class ProgressbarComponent {
  @Output() percentBar: number;

  constructor(
    private barConfig: NgbProgressbarConfig
  ) {
    // Configurasi Progress Bar
    this.barConfig.max = 4;
    this.barConfig.striped = true;
    this.barConfig.animated = true;
    this.barConfig.height = '20px';
  }
}
