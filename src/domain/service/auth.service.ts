import { Token } from '../interface/token'
import { LoginBody } from '../model/body/login.body'
import { User } from '../model/user'

export abstract class AuthService {
  abstract validateUser(payload: LoginBody): Promise<User>
  abstract login(payload: LoginBody): Promise<Token>
}
