import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';

@Module({
  imports: [],
  controllers: [AppController, QuestionsController],
  providers: [AppService, PrismaService, QuestionsService],
})
export class AppModule {}
