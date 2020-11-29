import { Module } from '@nestjs/common'
import { AppDataService } from 'src/data/service/app.data.service'
import { AppController } from '../controller/app.controller'
import { AppService } from 'src/domain/service/app.service'
import as from 'src/utils/as'
import { UserModule } from './user.module'

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [as(AppService, AppDataService)],
})
export class AppModule {}
