import { Controller, Get } from '@nestjs/common';
import { BeersService } from './beers.service';

@Controller('beers')
export class BeersController {

  constructor(private readonly appService: BeersService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  
}
