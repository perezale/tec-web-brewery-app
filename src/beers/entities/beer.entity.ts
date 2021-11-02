import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'beer',
})
export class Beer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  public style: string;

  @Column()
  public stock: number;

  @Column()
  public price: number;

  @Column()
  public quantity: number;

  @Column()
  public image: string;

  @Column()
  public clearance: boolean;

  @OneToMany((type) => Order, (order) => order.beer)
  public orders: Order[];

  constructor(
    id: number,
    name: string,
    style: string,
    stock: number,
    price: number,
    quantity: number,
    image: string,
    clearance: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.style = style;
    this.stock = stock;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
    this.clearance = clearance;
  }
}
