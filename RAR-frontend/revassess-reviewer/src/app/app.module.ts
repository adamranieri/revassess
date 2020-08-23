import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JunitsuiteComponent } from './components/junitsuite/junitsuite.component';
import { JunitcaseComponent } from './components/junitcase/junitcase.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { AssessmentOverviewComponent } from './components/assessment-overview/assessment-overview.component';
import {AssessmentService} from './services/assessment.service'
@NgModule({
  declarations: [
    AppComponent,
    JunitsuiteComponent,
    JunitcaseComponent,
    ReviewPageComponent,
    AssessmentOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AssessmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
