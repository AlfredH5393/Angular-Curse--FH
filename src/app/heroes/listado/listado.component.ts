import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ["IronMan", "Hulk", "Thor", "Spiderman"];
  deletedHeroes: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  deleteHero(): void{
    const hero: string = this.heroes.shift() || '';
    if(hero != "")
      this.deletedHeroes.push(hero);
  }

  restoreListHeroes(): void{
    this.heroes = ["IronMan", "Hulk", "Thor", "Spiderman"]
    this.deletedHeroes = [];
  }
}
