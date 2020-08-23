import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {AssessmentDTO} from '../models/assesment'

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http:HttpClient) { }

  getAllAssessments():Promise<AssessmentDTO[]>{
    return this.http.get<AssessmentDTO[]>(`http://${window.location.hostname}:${window.location.port}/assessments/`).toPromise();
  }


}
