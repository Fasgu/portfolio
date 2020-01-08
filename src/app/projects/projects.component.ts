import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;

  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
