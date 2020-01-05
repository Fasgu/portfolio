import { Component, OnInit } from '@angular/core';
import { EXPERIENCES } from '../mock-experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = EXPERIENCES;

  constructor() { }

  ngOnInit() {
  }

  isPar(value) {
    return (value % 2 === 0) ? true : false;
  }

}
