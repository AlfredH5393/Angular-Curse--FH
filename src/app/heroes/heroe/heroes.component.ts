import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = "IronMan";
    edad  : number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    getHeroeInfo():string {
        return `${this.nombre} - ${this.edad}`
    } 

    changeName():void {
        this.nombre = "SpiderMan";
    }

    changeAge(): void {
        this.edad = 20;
    }
}
