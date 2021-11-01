
import { Beer } from "src/beers/entities/beer.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "order"
})
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Beer)
  @JoinColumn({ name: 'beer_id' })
  beer: Beer;

  @Column()
  quantity: number;

  @Column()
  clientName: string;

  @Column()
  email: string;

  @Column()
  address: string;

}


