import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Config } from 'src/config'
import { CreateUserBody } from 'src/domain/model/body/create_user.body'
import { User } from 'src/domain/model/user'
import { UserService } from 'src/domain/service/user.service'

@Injectable()
export class UserDataService extends UserService {
  private index = 1
  private users: User[] = []

  async create(payload: CreateUserBody): Promise<void> {
    const user = new User()
    user.id = this.index
    user.email = payload.email
    user.firstName = ''
    user.lastName = ''
    user.hash = await bcrypt.hash(payload.password, Config.salt)

    this.users.push(user)
    this.index++
  }

  async fetchAll(): Promise<User[]> {
    return this.users
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.users.find((it) => it.email == email)
  }
}
