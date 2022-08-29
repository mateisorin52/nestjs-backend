import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, PrismaClient, Question, User } from '@prisma/client';
import { QuestionsService } from './questions.service';
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Post()
  async createQuestion(@Body() body: Prisma.QuestionCreateInput) {
    console.log(body);
    let response;
    if (
      body.a_answer &&
      body.b_answer &&
      body.c_answer &&
      body.correct_answers &&
      body.name
    ) {
      response = await this.questionService
        .createQuestion({
          ...body,
        })
        .then((data) => {
          return {
            status: 'Success',
            data: 'Intrebarea a fost adaugata cu succes!',
            payload: data,
          };
        })
        .catch((err) => {
          return {
            status: 'Fail',
            data: 'O erorare a impiedicat adaugarea intrebarii!',
            payload: err,
          };
        });
    } else {
      response = {
        status: 'Fail',
        data: 'Unul dintre campurile obligatorii este gol!',
        payload: '',
      };
    }
    return response;
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getQuestions() {
    return this.questionService.getQuestions();
  }
}
