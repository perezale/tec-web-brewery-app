import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "beer"
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

  @OneToMany((type) => Order, (order) => order.beer)
  public orders: Order[];

  constructor(id:number, name: string, style:string, stock:number){
    this.id = id;
    this.name = name;
    this.style = style;
    this.stock = stock;
  }
}
