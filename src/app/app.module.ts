import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { TermsconditionComponent } from './components/termscondition/termscondition.component';
import { LoginModule } from './modules/login/login.module';

import { SignupModule } from './modules/signup/signup.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgToastModule } from 'ng-angular-popup';

import { ForgotModule } from './modules/forgot/forgot.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { MatNativeDateModule, NativeDateAdapter, NativeDateModule } from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    PoliciesComponent,
    TermsconditionComponent,
    HomeComponent,

    

   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    ForgotModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatDatepickerModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    NativeDateModule,
    MatButtonModule,
   FormsModule
    
  


  
 
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
