import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 6000;

    await app.listen(port);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
   