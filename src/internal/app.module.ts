import { Module } from '@nestjs/common';
import { AppDataService } from 'src/data/service/app.data.service';
import { AppController } from '../presentation/controller/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppDataService],
})
export class AppModule {}
