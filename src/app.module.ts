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
      url: process.env.DATABASE_URL,
      entities: [Beer, Order],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    BeersModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
