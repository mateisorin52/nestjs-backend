import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TestController } from './test/test.controller';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [
    AppController,
    QuestionsController,
    AuthController,
    TestController,
  ],
  providers: [
    AppService,
    PrismaService,
    QuestionsService,
    AuthService,
    JwtService,
    { provide: APP_GUARD, useClass: AtGuard },
  ],
})
export class AppModule {}
