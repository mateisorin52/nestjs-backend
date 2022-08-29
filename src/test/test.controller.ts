import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  getResult() {
    console.log('ok');
    return 'works';
  }
}
