import { CreateUserBody } from '../model/body/create_user.body'
import { User } from '../model/user'

export abstract class UserService {
  abstract create(payload: CreateUserBody): Promise<void>
  abstract fetchAll(): Promise<User[]>
  abstract findUserByEmail(email: string): Promise<User>
}
