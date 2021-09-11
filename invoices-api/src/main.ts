import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFouncExceptionFilter } from './exception-filters/entity-not-found.exception-filter';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
   const app = await NestFactory.create(AppModule, { cors: true });
   app.useGlobalFilters(new EntityNotFouncExceptionFilter())
   app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }))
   app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

   app.connectMicroservice({
      transport: Transport.KAFKA,
      options: {
         client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [process.env.KAFKA_HOST]
         },
         consumer: {
            groupId:
               !process.env.KAFKA_CONSUMER_GROUP_ID ||
                  process.env.KAFKA_CONSUMER_GROUP_ID === ''
                  ? 'my-consumer-' + Math.random()
                  : process.env.KAFKA_CONSUMER_GROUP_ID
         }
      }
   })

   await app.startAllMicroservicesAsync()
   await app.listen(3000);
}
bootstrap();