import { Beer } from "src/beers/entities/beer.entity";

export class CreateOrderDto {

  beer: Beer;

  
  quantity: number;

  
  clientName: string;

  
  email: string;

  
  address: string;
}