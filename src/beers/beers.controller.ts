import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto';

@Controller('beers')
export class BeersController {

  constructor(private readonly beersService: BeersService) {}

  @Get()
  @Render('beers/index')
  findAll() {
    return { beers: this.beersService.findAll() };
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.beersService.findOne(params.id);
  }

  @Post()
  create(@Body() createBeerDto: CreateBeerDto) {
    return this.beersService.create(createBeerDto);
  }
  
}
