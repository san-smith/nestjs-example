import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateUser } from 'src/domain/interface/user'
import { User } from 'src/domain/model/user'
import { UserService } from 'src/domain/service/user.service'

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async fetchAllUsers(): Promise<User[]> {
    return this.userService.fetchAll()
  }

  @Post('users')
  async create(@Body() payload: CreateUser) {
    await this.userService.create(payload)
  }
}
