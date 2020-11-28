import { Injectable } from '@nestjs/common';
import { AppService } from 'src/domain/service/app.service';

@Injectable()
export class AppDataService implements AppService {
  getHello(): string {
    return 'Hello World'
  }
}
