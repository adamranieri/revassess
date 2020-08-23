export class JUnitCase{
    name:string;
    classname:string;
    time:number;
    failure?:{message:string,type:string};
}

export class JUnitSuite{
    suiteName:string;
    tests:number;
    failures:number;
    errors:number;
    skipped:number
    junitCases:Array<JUnitCase>;
}