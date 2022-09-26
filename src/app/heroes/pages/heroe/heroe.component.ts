import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../intefaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  id: string = '';
  heroe!: Heroe ;
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private heroesServices: HeroesService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.id = id);
    this.heroesServices.getHeroe(this.id).subscribe(resp =>{
      this.heroe = resp;
    });
  }
  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
