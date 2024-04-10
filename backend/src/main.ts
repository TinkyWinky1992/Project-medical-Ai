import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  //console.log(process.env.WEP_PORT);
 // console.log(process.env.JWT_TOKEN);
  const app = await NestFactory.create(AppModule);
  app.use(express.json());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(5000);
}
bootstrap();
