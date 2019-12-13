import { Injectable, EventEmitter } from '@angular/core';
import Recipe from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
      new Recipe(
        'Torrijas',
        'Spanish Torrejas is a dessert',
        'https://upload.wikimedia.org/wikipedia/commons/8/8a/Torrijas_en_detalle.jpg',
        [
          new Ingredient('eggs', 5),
          new Ingredient('flour', 3),
          new Ingredient('sugar', 3)
        ]
      ),
      new Recipe(
        'Croquetas',
        'Croquetas are delicious',
        'https://live.staticflickr.com/8048/8104905600_86c0731e02_b.jpg',
        [
          new Ingredient('ham', 2),
          new Ingredient('cheese', 1)
        ]
      )
    ];
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
