import { Component, OnInit } from '@angular/core';
import { AssessmentService } from 'src/app/services/assessment.service';
import { AssessmentDTO } from 'src/app/models/assesment';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  constructor(private assessmentService:AssessmentService) { }

  assessmentLoaded:boolean = false;
  assessments:AssessmentDTO[];

  ngOnInit(): void {
    this.loadAllAssessments();
  }

  async loadAllAssessments():Promise<void>{
    this.assessments = await this.assessmentService.getAllAssessments();
    this.assessmentLoaded = true;
    console.log(this.assessments)
  }

}
