import { Injectable , UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { response } from 'express';
import path from 'path';
var fi = require('fs');
@Injectable()
export class AppService {
   @UseGuards(AuthGuard('basic'))
    getHello(): string {
    return 'Hello World!';
  }
}
