import { Module } from '@nestjs/common'

import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from 'src/domain/service/auth.service'

import { UserModule } from './user.module'
import { AuthDataService } from 'src/data/service/auth.data.service'
import { AuthController } from 'src/controller/auth.controller'
import { Config } from 'src/config'
import { LocalStrategy } from 'src/data/strategy/local.strategy'
import { JwtStrategy } from 'src/data/strategy/jwt.strategy'
import as from 'src/utils/as'

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: Config.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy,
    // as(AuthService, AuthDataService),
    {
      provide: AuthService,
      useClass: AuthDataService,
    },
  ],
  exports: [
    {
      provide: AuthService,
      useClass: AuthDataService,
    },
  ],
})
export class AuthModule {}
