import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFouncExceptionFilter } from './exception-filters/entity-not-found.exception-filter';
import { RpcExceptionFilter } from './exception-filters/rpc.exception-filter';

async function bootstrap() {
   const app = await NestFactory.create(AppModule, { cors: true });
   app.useGlobalFilters(
      new EntityNotFouncExceptionFilter(),
      new RpcExceptionFilter()
   )
   app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }))
   app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
   await app.listen(3000);
}
bootstrap();
