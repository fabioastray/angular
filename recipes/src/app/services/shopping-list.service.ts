import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('apple', 3),
      new Ingredient('sugar', 1)
    ];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.next(this.getIngredients());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
