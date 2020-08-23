import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { JUnitSuite } from './maven-tests';

@Schema()
export class Assessment extends Document{

    @Prop()
    associateName:string;

    @Prop()
    junitSuites?:Array<JUnitSuite>;
    
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);