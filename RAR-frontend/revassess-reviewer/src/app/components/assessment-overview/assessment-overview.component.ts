import { Component, OnInit, Input } from '@angular/core';
import { AssessmentDTO } from 'src/app/models/assesment';
import { JUnitSuite } from 'src/app/models/maven-tests';

@Component({
  selector: 'app-assessment-overview',
  templateUrl: './assessment-overview.component.html',
  styleUrls: ['./assessment-overview.component.css']
})
export class AssessmentOverviewComponent implements OnInit {

  constructor() { }

  @Input() assessment:AssessmentDTO;
  isShown:boolean = false;
  btnText = 'Show results'
  
  ngOnInit(): void {
  }

  show():void{
    this.isShown = !this.isShown;
    if(this.isShown){
      this.btnText = 'Hide Results'
    }else{
      this.btnText = 'Show Results'
    }
  }

}
