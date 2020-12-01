import { UnauthorizedException } from '@nestjs/common'
import { Done } from 'src/domain/interface/done'
import { User } from 'src/domain/model/user'
import { UserService } from 'src/domain/service/user.service'
import { BearerStrategy } from 'src/domain/strategy/bearer.strategy'

export class BearerDataStrategy extends BearerStrategy {
  constructor(private readonly userService: UserService) {
    super()
  }
  async verify(token: string, done: Done<any>): Promise<void> {
    let user: User | null
    try {
      user = await this.userService.findUserByToken(token)
    } catch (e) {
      throw new UnauthorizedException()
    }
    done(undefined, { user, token })
  }
}
