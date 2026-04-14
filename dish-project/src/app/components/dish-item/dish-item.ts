import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dish-item',
  imports: [],
  templateUrl: './dish-item.html',
  styleUrl: './dish-item.css',
})
export class DishItem {
  @Output() cambioQuantita = new EventEmitter<number>();
  modifica(valore: number) {
    this.cambioQuantita.emit(valore);
  }
}
