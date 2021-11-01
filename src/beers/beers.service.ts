import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { Beer } from './entities/beer.entity';

@Injectable()
export class BeersService {
  

  constructor(
    @InjectRepository(Beer)
    private beerRepository: Repository<Beer>,
  ){
   }

  create(createBeerDto: CreateBeerDto): Promise<Beer> {
    let beer = this.beerRepository.create(createBeerDto);
    return this.beerRepository.save(beer);
  }


  findAll(style : string, sortBy : string , orderBy : string): Promise<Beer[]> {
    return this.beerRepository.find();
  }

  findOne(id: number): Promise<Beer> {
    return this.beerRepository.findOne(id);
  }


  async update(id: number, updateBeerDto: UpdateBeerDto): Promise<Beer> {
    let beer = await this.findOne(id);
    beer.name = updateBeerDto.name;
    beer.style = updateBeerDto.style;
    beer.stock = updateBeerDto.stock;
    return this.beerRepository.save(beer);

  }

  remove(id: number): void {
    this.beerRepository.delete(id);
  }
}
