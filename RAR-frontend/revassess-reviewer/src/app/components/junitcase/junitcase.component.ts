import { Component, OnInit, Input } from '@angular/core';
import { JUnitCase } from 'src/app/models/maven-tests';

@Component({
  selector: 'app-junitcase',
  templateUrl: './junitcase.component.html',
  styleUrls: ['./junitcase.component.css']
})
export class JunitcaseComponent implements OnInit {

  constructor() { }

  @Input() junitcase:JUnitCase;
  

  ngOnInit(): void {
    
  }

}
