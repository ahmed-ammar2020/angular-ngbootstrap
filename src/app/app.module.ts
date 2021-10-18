import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IslamicCivilComponent}  from "./islamic-civil/islamic-civil.component";
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    IslamicCivilComponent,
    NavbarComponent,
    DatepickerComponent,
    DatepickerPopupComponent,
    HomeComponent,
    AccordionComponent,
    ModalComponent,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
