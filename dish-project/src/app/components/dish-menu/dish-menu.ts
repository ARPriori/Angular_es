import { Component } from '@angular/core';
import { Piatto } from '../../models/dish-model';

@Component({
  selector: 'app-dish-menu',
  imports: [],
  templateUrl: './dish-menu.html',
  styleUrl: './dish-menu.css',
})
export class DishMenu {
  piatti: Piatto[] = [
    { id: 1, nome: 'Pizza Margherita', prezzo: 8, quantita: 0 },
    { id: 2, nome: 'Carbonara', prezzo: 12, quantita: 0 },
    { id: 3, nome: 'Tiramisù', prezzo: 6, quantita: 0 }
  ];
  totale = 0;
  aggiornaOrdine(variazione: number, piatto: Piatto) {
    piatto.quantita += variazione;
    this.totale += (variazione * piatto.prezzo);
  }
}
