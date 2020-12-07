import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgbProgressbarModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

// Component
import { ProgressbarComponent } from './_component/progressbar/progressbar.component';
import { SignupComponent } from './signup.component';
import { AccountComponent } from './account/account.component';
import { ImageComponent } from './image/image.component';
import { PersonalComponent } from './personal/personal.component';
import { SuccessComponent } from './success/success.component';
import { ToastrComponent } from './_component/toastr/toastr.component';

// NgRx Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from '../reducers';
import { environment } from 'src/environments/environment';
import * as fromSignupReducer from '../signup/store/reducer/singup.reducer';
import * as fromProgresssReducer from '../signup/store/reducer/progressbar.reducer';


@NgModule({
  declarations: [
    SignupComponent, 
    AccountComponent, 
    ImageComponent, 
    PersonalComponent, 
    SuccessComponent, 
    ProgressbarComponent, ToastrComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbProgressbarModule,
    NgbToastModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('signup', fromSignupReducer.reducer),
    StoreModule.forFeature('progressbar', fromProgresssReducer.reducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [
  ]
})
export class SignupModule { }
