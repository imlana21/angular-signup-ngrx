import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this._formGroup = this.formBuilder.group({
    });
  }

  ngOnInit(): void {
    
  }

  nextButton(): void {
    
  }

  prevButton(): void {

  }
}
