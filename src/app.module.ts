import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeersModule } from './beers/beers.module';
import { Beer } from './beers/entities/beer.entity';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret123!',
      database: 'brewery',
      entities: [Beer, Order],
      synchronize: true,
    }),
    BeersModule, 
    OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
