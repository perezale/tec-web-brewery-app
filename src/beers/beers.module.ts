import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeersController } from './beers.controller';
import { BeersService } from './beers.service';
import { Beer } from './entities/beer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beer])],
  controllers: [BeersController],
  providers: [BeersService]
})
export class BeersModule {}
