import { Module } from '@nestjs/common'
import { UserController } from 'src/controller/user.controller'
import { UserDataService } from 'src/data/service/user.data.service'
import { UserService } from 'src/domain/service/user.service'
import as from 'src/utils/as'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [as(UserService, UserDataService)],
  exports: [as(UserService, UserDataService)],
})
export class UserModule {}
