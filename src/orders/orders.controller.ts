import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
import { OrdersService } from './orders.service';

@Controller('orders')  // localhost:3000/orders/...
export class OrdersController {

  constructor(
    private ordersService: OrdersService
  ){}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Order {
    return this.ordersService.create(createOrderDto);
  }

}
