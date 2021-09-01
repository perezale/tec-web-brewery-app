import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { Beer } from './interfaces/beer.interface';

@Injectable()
export class BeersService {
  
  private beers : Beer[] = [
    {
      "id": 1,
      "name": "IPA mutante",
      "style": "India Pale Ale",
      "stock": 500
    }
  ];

  findAll(): Beer[] {
    return this.beers;
  }

  findOne(id: number): Beer {
    return this.beers.find(function(beer){
      return beer.id == id;
    });
  }

  create(createBeerDto: CreateBeerDto): Beer {
    let nextId = this.beers[this.beers.length-1].id + 1;
    let beer : Beer = {
      id: nextId,
      ...createBeerDto
    };
    this.beers.push(beer);
    return beer;
  }

}
