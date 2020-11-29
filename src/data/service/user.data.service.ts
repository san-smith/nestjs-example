import { Injectable } from '@nestjs/common'
import { CreateUser } from 'src/domain/interface/user'
import { User } from 'src/domain/model/user'
import { UserService } from 'src/domain/service/user.service'

@Injectable()
export class UserDataService extends UserService {
  private index: number = 1
  private users: User[] = []

  async create(payload: CreateUser): Promise<void> {
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
}
