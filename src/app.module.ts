import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available throughout the application
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    // Other modules here
    ItemsModule,
    // Other modules here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
