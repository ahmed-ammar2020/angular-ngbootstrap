import { Component, OnInit } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  questions:  {
    title: string;
    answer: string;
  }[] = [
    {
      title: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
    {
      title: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
    {
      title: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
    {
      title: lorem.sentence() + "?",
      answer: lorem.paragraph(),
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
