import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { getProgressBar } from '../../store/selector/progressbar.selectors';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [NgbProgressbarConfig],
})

export class ProgressbarComponent implements OnInit {
  progressNumber: any;
  @ViewChild('ulist') ul: ElementRef;

  constructor(
    private barConfig: NgbProgressbarConfig,
    private store: Store<Progressbar>,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // Configurasi Progress Bar
    this.barConfig.max = 4;
    this.barConfig.striped = true;
    this.barConfig.animated = true;
    this.barConfig.height = '20px';
  }
  
  ngOnInit(): void {
    this.store.select(getProgressBar).forEach( async data => {
      this.progressNumber = data;
      if(data !=0 ) {
        this.renderer.setAttribute(
          this.el.nativeElement.children[0].children[data-1], 'class', 'active'
        );
        console.log(data);
      }
    });
  }
}
