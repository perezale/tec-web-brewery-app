import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { Beer } from './interfaces/beer.interface';

@Injectable()
export class BeersService {
  
  private beers : Beer[] = [
    {
      "id": 1,
      "name": "IPA mutante",
      "style": "India Pale Ale",
      "stock": 500
    },
    {
      "id": 2,
      "name": "Porter",
      "style": "Porter",
      "stock": 200
    },
    {
      "id": 3,
      "name": "Black Porter",
      "style": "Porter",
      "stock": 100
    }
  ];

  findAll(style : string, sortBy : string , orderBy : string): Beer[] {
    let queryBeers = [];
    
    // Filtro por estilo
    if(!style){
      queryBeers = this.beers;
    } 
    else {
      queryBeers = this.beers.filter(function(beer){
        return beer.style.toLowerCase() == style.toLowerCase();
      });
    }

    if(!sortBy){
      return queryBeers;
    }

    // Orden por nombre
    let orderedBeers = queryBeers.sort(function(a, b){
      let campoAOrdenarA = a[sortBy];
      let campoAOrdenarB = b[sortBy];
      if  (campoAOrdenarA < campoAOrdenarB) {
        return -1;
      }
      if (campoAOrdenarA == campoAOrdenarB) {
        return 0;
      }
      return 1;
    })
    
    return orderedBeers;

  }

  findOne(id: number): Beer {
    return this.beers.find(function(beer){
      return beer.id == id;
    });
  }

  create(createBeerDto: CreateBeerDto): Beer {
    let nextId = this.beers[this.beers.length-1].id + 1;
    let beer : Beer = new Beer(nextId, createBeerDto.name, createBeerDto.style, createBeerDto.stock);
    this.beers.push(beer);
    return beer;
  }

  update(id: number, updateBeerDto: UpdateBeerDto): Beer {
    const beer = this.findOne(id);
    beer.name = updateBeerDto.name;
    beer.style = updateBeerDto.style;
    beer.stock = updateBeerDto.stock;
    return beer;
  }

  remove(id: number): void {
    const beer = this.findOne(id);
    if (!beer)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    const pos = this.beers.indexOf(beer);
    this.beers.splice(pos, 1);
  }
}
