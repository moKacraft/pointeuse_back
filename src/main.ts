import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = (process.env.PORT || 3000);

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Swagger nestjs example')
  .setDescription('The nestjs API description')
  .setVersion('1.0')
  .addTag('nestjs API')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
