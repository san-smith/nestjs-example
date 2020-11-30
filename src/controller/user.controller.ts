import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { CreateUserBody } from 'src/domain/model/body/create_user.body'

import { User } from 'src/domain/model/user'
import { UserService } from 'src/domain/service/user.service'

@ApiTags('users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @ApiOkResponse({ type: User, isArray: true })
  async fetchAllUsers(): Promise<User[]> {
    return this.userService.fetchAll()
  }

  @Post('users')
  async create(@Body() payload: CreateUserBody) {
    await this.userService.create(payload)
  }
}
