import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../intefaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.heroesServices.getHeroes()
    .subscribe(resp => {
      this.heroes = resp;
    });
  }

}
