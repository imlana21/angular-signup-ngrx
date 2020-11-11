import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

// Component
import { ProgressbarComponent } from './_component/progressbar/progressbar.component';
import { SignupComponent } from './signup.component';
import { AccountComponent } from './account/account.component';
import { ImageComponent } from './image/image.component';
import { PersonalComponent } from './personal/personal.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    SignupComponent, 
    AccountComponent, 
    ImageComponent, 
    PersonalComponent, 
    SuccessComponent, ProgressbarComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbProgressbarModule
  ],
  exports: [
    SignupComponent,
    PersonalComponent,
    AccountComponent,
    ImageComponent,
    SuccessComponent
  ]
})
export class SignupModule { }
