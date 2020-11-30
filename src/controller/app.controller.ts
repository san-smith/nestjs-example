import { Controller } from '@nestjs/common'
import { AppService } from 'src/domain/service/app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
