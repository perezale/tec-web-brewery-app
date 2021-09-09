import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
import { OrdersController } from './orders.controller';

@Injectable()
export class OrdersService {

  create(createOrderDto: CreateOrderDto): Order {
    //throw new Error('Method not implemented.');
    let order: Order = {
      id: 10,
      ...createOrderDto
    }
    return order;
  }


}
