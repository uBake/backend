import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GLOBAL_PREFIX } from './consts';
import { ValidationPipe } from './pipes/validation.pipe';

const PORT = process.env.PORT || 5200;

const start = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);

  const config = new DocumentBuilder()
    .setTitle('NestJS API for uBake')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('uBake')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(GLOBAL_PREFIX + '/docs', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

start();
