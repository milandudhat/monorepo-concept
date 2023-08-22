import { Injectable } from '@nestjs/common';
import { milan } from '@mp/milan';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return ({ message: process.env.DB_HOST });
  }
}
