import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-http-bearer'
import { Done } from '../interface/done'

export abstract class BearerStrategy extends PassportStrategy(Strategy) {
  abstract verify(token: string, done: Done<any>): Promise<void> // TODO: уточнить тип для Done
}
