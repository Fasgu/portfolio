import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSkills(type) {
    return SKILLS.filter(element => {
      return element.type === type;
    });
  }

}
