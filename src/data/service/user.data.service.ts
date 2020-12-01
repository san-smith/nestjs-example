import { Injectable } from '@nestjs/common'
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

    this.users.push(user)
    this.index++
  }

  async fetchAll(): Promise<User[]> {
    return this.users
  }

  findUserByToken(token: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
