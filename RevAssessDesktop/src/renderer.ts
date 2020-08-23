import './index.css';
import { ipcRenderer } from 'electron';
import {JUnitCase,JUnitSuite,AssessmentSummary} from './utils/models'


const nameInput:HTMLInputElement = <HTMLInputElement> document.getElementById("nameInput");
const assessBtn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("assessBtn");
const infoDiv:HTMLDivElement = <HTMLDivElement> document.getElementById("info");

assessBtn.addEventListener("click",assess)

function assess(){
    infoDiv.innerHTML = `<p>Your code is being analyzed and uploaded. Please keep the app open while the tests are run.
    Your results will display here. This may take several minutes</p>`;
    ipcRenderer.send('rev-assess',nameInput.value);
}

ipcRenderer.on('test-results',(event,results:AssessmentSummary)=>{
    console.log(results);
    renderTestSuiteInfo(results);
})


function renderTestSuiteInfo(assesment:AssessmentSummary){
    infoDiv.innerHTML = renderTestSummary(assesment);    
}

function renderTestCasesList(junitCases:Array<JUnitCase>):string{
    
    return junitCases.map((tcase:JUnitCase)=>{
        let success:boolean
        success = tcase.failure === undefined ? true:false;
        let textColor:string = success ? ``:`style="color: red;"` ;
        let pf:string = success ? `PASSED` :`FAILED` ;
        let errorMessage:string = success ? `` :`${tcase.failure.message}`  ;

        return `<li ${textColor}>${tcase.name} :  ${pf}  ${errorMessage}</li>`;
    }).join('');

}

function renderTestSummary(assessment:AssessmentSummary):string{

    return assessment.junitSuites.map((testSuite)=>{
        return `<h3>${testSuite.suiteName}</h3>
        <ol> ${renderTestCasesList(testSuite.junitCases)}</ol>
         `
    }).join('');

}


