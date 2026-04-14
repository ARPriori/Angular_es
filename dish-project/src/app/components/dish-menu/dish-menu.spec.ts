import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishMenu } from './dish-menu';

describe('DishMenu', () => {
  let component: DishMenu;
  let fixture: ComponentFixture<DishMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
