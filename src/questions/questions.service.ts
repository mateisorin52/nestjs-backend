import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Question, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}
  async createQuestion(data: Prisma.QuestionCreateInput): Promise<Question> {
    return await this.prisma.question.create({
      data,
    });
  }
}
