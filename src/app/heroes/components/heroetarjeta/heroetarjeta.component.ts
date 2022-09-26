import { Component, Input } from '@angular/core';
import { Heroe } from '../../intefaces/heroes.interface';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroeTarjetaComponent{

  @Input() heroe!: Heroe;

}
