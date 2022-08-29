import { Injectable } from '@nestjs/common';
import { Prisma, Question } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}
  async createQuestion(data: Prisma.QuestionCreateInput): Promise<Question> {
    return await this.prisma.question.create({
      data,
    });
  }
  async getQuestions() {
    return await this.prisma.question.findMany();
  }
  async getQuestion(id: string) {
    return await this.prisma.question.findUnique({ where: { id } });
  }
}
