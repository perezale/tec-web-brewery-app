export class Beer {
  id: number;
  name: string;
  style: string;
  stock: number;

  constructor(id:number, name: string, style:string, stock:number){
    this.id = id;
    this.name = name;
    this.style = style;
    this.stock = stock;
  }
}
