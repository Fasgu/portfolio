import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  domine = 'https://fasgu.com/';

  constructor() { }

  ngOnInit() {
  }

}
