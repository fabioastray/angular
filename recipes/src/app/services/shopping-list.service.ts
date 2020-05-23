import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('apple', 3),
      new Ingredient('sugar', 1)
    ];
  }

  emitIngredientsChanged() {
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    this.emitIngredientsChanged();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);

    this.emitIngredientsChanged();
  }

  editIngredient(index, ingredient) {
    if (typeof this.ingredients[index] !== 'undefined') {
      this.ingredients[index] = ingredient;
      this.emitIngredientsChanged();
    }
  }

  deleteIngredient(index) {
    if (typeof this.ingredients[index] !== 'undefined') {
      this.ingredients.splice(index, 1);
      this.emitIngredientsChanged();
    }
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index) {
    if (typeof this.ingredients[index] !== 'undefined') {
      return this.ingredients[index];
    }
  }
}
