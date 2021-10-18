import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HomeComponent } from './home/home.component';
import { IslamicCivilComponent } from './islamic-civil/islamic-civil.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "islamic",
    component: IslamicCivilComponent,
  },
  {
    path: "datepicker",
    component: DatepickerComponent
  },
  {
    path: "datepicker-popup",
    component: DatepickerPopupComponent
  },
  {
    path: "accordion",
    component: AccordionComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
  {
    path: "type",
    component: TypeaheadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
