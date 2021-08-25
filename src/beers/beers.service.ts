import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';

@Injectable()
export class BeersService {
  
  private beers = [
    {
      "id": 1,
      "name": "IPA mutante",
      "style": "India Pale Ale",
      "stock": 500
    }
  ];

  findAll() {
    return this.beers;
  }

  findOne(id: any) {
    return this.beers.find(function(beer){
      return beer.id == id;
    });
  }

  create(createBeerDto: CreateBeerDto) {
    let nextId = this.beers[this.beers.length-1].id + 1;
    let beer = {
      "id": nextId,
      ...createBeerDto
    };
    this.beers.push(beer);
    return beer;
  }

}
