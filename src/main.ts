import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await prisma.$connect().then(res=>{console.log("Database connected!")}).catch(err=>{console.log(`Error is : ${err}`)})
  await app.listen(3000);
}
bootstrap();
