import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { AssessmentModule } from './assessment/assessment.module';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/revassess'),
    AssessmentModule,
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'client'),})
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
