import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.css']
})
export class DatepickerPopupComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;
  model: NgbDateStruct;

  constructor() { }

  ngOnInit(): void {
  }

}
