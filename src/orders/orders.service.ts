import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrdersController } from './orders.controller';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ){

  }
  create(createOrderDto: CreateOrderDto): Promise<Order> {
   let order = this.orderRepository.create(createOrderDto);
   return this.orderRepository.save(order);
  }


}
