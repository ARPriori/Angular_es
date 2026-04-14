import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCard } from './hero-card';
import { Hero } from '../../../models/hero.model';

describe('HeroCard', () => {
  let component: HeroCard;
  let fixture: ComponentFixture<HeroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCard);
    component = fixture.componentInstance;
    component.hero = { id: 1, nome: 'Test Hero', potere: 'Test Power', completata: false };
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
