import { Injectable } from '@nestjs/common'
import { AppService } from 'src/domain/service/app.service'

@Injectable()
export class AppDataService extends AppService {
  getHello(): string {
    return 'Hello World'
  }
}
