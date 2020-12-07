import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import { Signup } from '../../models/signup';
import { setProgressbars } from '../store/action/progressbar.actions';
import { addImage } from '../store/action/singup.actions';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public _formGroup: FormGroup;
  protected img = {
    pic: '',
    sigpic: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<Signup>,
    private progressStore: Store<Progressbar>
  ) {
    this._formGroup = this.formBuilder.group({
      pic: new FormControl(null), 
      sigpic: new FormControl(null)
    });
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        this.progressStore.dispatch(setProgressbars({progress: 3}))
      },
      20
    );
  }

  nextButton(): void {
    this.store.dispatch(addImage(this.img));
    this.router.navigate(['signup/success']); 
  }
  
  getImage(event: any, btnName: string) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (progress: ProgressEvent) => {
        let data = (<FileReader>progress.target).result; 

        if(btnName == 'pic') this.img.pic = data.toString();
        else if (btnName == 'sigpic') this.img.sigpic = data.toString();
      }
    }

    console.log(this.img)
  } 

  prevButton(): void {
    this.router.navigate(['signup/personal']);
  }
}
