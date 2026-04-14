import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../../models/hero.model';
import { HeroCard } from '../hero-card/hero-card';

@Component({
  selector: 'app-hero-list',
  imports: [CommonModule, HeroCard],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  totalCompleted: number = 0;

  heroes: Hero[] = [
    { id: 1, nome: 'Superman', potere: 'Super forza', completata: false },
    { id: 2, nome: 'Batman', potere: 'Intelligenza', completata: false },
    { id: 3, nome: 'Wonder Woman', potere: 'Lazo della verità', completata: false },
    { id: 4, nome: 'Flash', potere: 'Super velocità', completata: false },
    { id: 5, nome: 'Green Lantern', potere: 'Anello del potere', completata: false }
  ];

  markAsDone(hero : Hero) {
    this.totalCompleted++;
    hero.completata = true;
  }
}
