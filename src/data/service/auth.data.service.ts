import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { Token } from 'src/domain/interface/token'
import { LoginBody } from 'src/domain/model/body/login.body'
import { User } from 'src/domain/model/user'
import { AuthService } from 'src/domain/service/auth.service'
import { UserService } from 'src/domain/service/user.service'

@Injectable()
export class AuthDataService extends AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    super()
  }

  async validateUser(payload: LoginBody): Promise<User> {
    const user = await this.userService.findUserByEmail(payload.email)
    if (user) {
      const isMatch = await bcrypt.compare(payload.password, user.hash)
      return isMatch ? user : null
    }
    return null
  }

  async login(payload: LoginBody): Promise<Token> {
    console.log(payload)
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
