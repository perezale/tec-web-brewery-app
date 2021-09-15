import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto';
import { QueryBeersDTO } from './dto/query-beers.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { Beer } from './interfaces/beer.interface';

@Controller('beers')
export class BeersController {

  constructor(private readonly beersService: BeersService) {}

  @Get()
  findAll(@Query() query : QueryBeersDTO) : Beer[] {
    let style = query.style;
    let sortBy = query.sortBy;
    let orderBy = query.orderBy;
    return this.beersService.findAll(style, sortBy, orderBy);
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.beersService.findOne(params.id);
  }

  @Post()
  create(@Body() createBeerDto: CreateBeerDto) {
    return this.beersService.create(createBeerDto);
  }
  
  @Put(':id')
  update(@Param('id') id: number, @Body() updateBeerDto: UpdateBeerDto) : Beer {
    return this.beersService.update(id, updateBeerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) : void {
    return this.beersService.remove(id);
  }
  
}
