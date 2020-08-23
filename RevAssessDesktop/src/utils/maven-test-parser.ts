import {AssessmentSummary,JUnitCase,JUnitSuite} from './models'
const xml2js = require('xml2js');
const parser = xml2js.Parser();
const fs = require('fs');
//let c = 'C:\\Users\\Administrator\\Documents\\workspace-spring-tool-suite-4-4.2.2.RELEASE\\SampleApp\\target\\surefire-reports\\TEST-dev.ranieri.tests2.SomethingTests.xml';

export async function parse(path:string):Promise<JUnitSuite>{
    const xml = await fs.promises.readFile(path)
    const report = await parser.parseStringPromise(xml);
    
    const testsuite:any = {};
    testsuite.suiteName = report.testsuite.$.name;
    testsuite.tests = Number.parseFloat(report.testsuite.$.tests)
    testsuite.time = Number.parseFloat(report.testsuite.$.time)
    testsuite.failures = Number.parseFloat(report.testsuite.$.failures)
    testsuite.errors = Number.parseFloat(report.testsuite.$.errors);
    testsuite.skipped = Number.parseFloat(report.testsuite.$.skipped);


    // makes test cases array
    const cases = []
    for(let x of report.testsuite.testcase){
        const test:any = {name:x.$.name,classname:x.$.classname,time:x.$.time}
       if(x.failure !== undefined){    
           test.failure = {};    
           test.failure.message = x.failure[0]._;
           test.failure.type = x.failure[0].$.type
       }
    
       cases.push(test)
    }
    testsuite.junitCases = cases;

   return <JUnitSuite> testsuite;

}

//parse(c);
