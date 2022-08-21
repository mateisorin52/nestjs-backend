import { Controller, Get } from '@nestjs/common';
import { Prisma, PrismaClient, Question, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { QuestionsService } from './questions.service';
const prisma = new PrismaClient();
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  createQuestion() {
    this.questionService.createQuestion({
      a_answer: '1',
      b_answer: '2',
      c_answer: '3',
      name: '4',
      correct_answers: ['a'],
    });
  }
}
