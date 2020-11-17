import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this._formGroup = this.formBuilder.group({
      pic: new FormControl(null), 
      sigpic: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  nextButton(): void {
    this.router.navigate(['signup/success']); 
  }

  prevButton(): void {
    this.router.navigate(['signup/personal']);
  }
}
