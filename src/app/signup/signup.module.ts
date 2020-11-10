import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    SuccessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SignupModule { }
