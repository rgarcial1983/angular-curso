import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    //Objetos
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 9000
        },
        {
            nombre: 'Picolo',
            poder: 3000
        }
    ];

    //Getters y Setters
    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    //Constructores
    constructor() {}

    //Métodos
    agregarPersonaje( personaje: Personaje) {
        this._personajes.push(personaje);
    }

}