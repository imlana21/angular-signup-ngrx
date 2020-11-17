import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this._formGroup = this.formBuilder.group({
      fname: new FormControl(null), 
      lname: new FormControl(null), 
      phno: new FormControl(null), 
      phno_2: new FormControl(null)
    })
  }

  ngOnInit(): void {
    
  }

  nextButton(): void {
    this.router.navigate(['signup/image']); 
  }

  prevButton(): void {
    this.router.navigate(['signup/account']);
  }
}
