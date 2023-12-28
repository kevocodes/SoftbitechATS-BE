import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import debug from 'debug';

const devLogger: debug.IDebugger = debug('softbitech-ats:server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);

  devLogger(`Application is running on port ${port}`);
}
bootstrap();
