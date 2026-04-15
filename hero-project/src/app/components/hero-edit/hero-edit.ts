import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {
  @Input() newHero: Hero = { 
    id: -1,
    nome: '',
    potere: '',
    completata: false
  };

  @Output() onHeroAdded = new EventEmitter<Hero>();

  addHero() {
    this.onHeroAdded.emit(this.newHero);
  }

}
