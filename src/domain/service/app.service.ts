import { Injectable } from '@nestjs/common'

@Injectable()
export abstract class AppService {
  abstract getHello(): string
}
