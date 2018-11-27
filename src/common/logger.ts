import { LoggerService } from '@nestjs/common';
import { debug } from 'util';

export class Logger implements LoggerService {
  log(message: string) {
    debug(message);
  }
  error(message: string, trace: string) {}
  warn(message: string) {}
}