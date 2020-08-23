import { Component, OnInit, Input } from '@angular/core';
import { JUnitSuite } from 'src/app/models/maven-tests';

@Component({
  selector: 'app-junitsuite',
  templateUrl: './junitsuite.component.html',
  styleUrls: ['./junitsuite.component.css']
})
export class JunitsuiteComponent implements OnInit {

  constructor() { }

  @Input() suite:JUnitSuite
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
