import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './signup/account/account.component';
import { ImageComponent } from './signup/image/image.component';
import { PersonalComponent } from './signup/personal/personal.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './signup/success/success.component';


const routes: Routes = [
  { 
    path: 'signup', 
    component: SignupComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'image', component: ImageComponent },
      { path: 'success', component: SuccessComponent },
      { path: '', redirectTo: 'account', pathMatch: 'prefix'}
    ]
   },
   {
     path: '',
     redirectTo: 'signup',
     pathMatch: 'full'
   }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
