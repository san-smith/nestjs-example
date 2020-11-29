import { CreateUser } from '../interface/user'
import { User } from '../model/user'

export abstract class UserService {
  abstract create(payload: CreateUser): Promise<void>
  abstract fetchAll(): Promise<User[]>
}
