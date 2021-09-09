import { Module } from '@nestjs/common';
import { BeersModule } from './beers/beers.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [BeersModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
