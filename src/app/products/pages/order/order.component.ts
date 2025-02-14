import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

public isUpperCase: boolean = false;
public orderBy?: keyof Hero;


public heroes: Hero[]= [
  {
    name: 'Alan sutton y las criaturitas de la ansiedad',
    Uso: false,
    color: Color.red
  },
  {
    name: 'BigXthaPlug',
    Uso: true,
    color: Color.blue
  },
  {
    name: 'Tyler',
    Uso: true,
    color: Color.black
  },
  {
    name: 'Kaliuchis',
    Uso: false,
    color: Color.pink
  },
  {
    name: 'MFDoom',
    Uso: true,
    color: Color.green
  },

]

toggleUpperCase():void {
  this.isUpperCase = !this.isUpperCase
}

changueOrder(value: keyof Hero){
  this.orderBy = value;
}
}
