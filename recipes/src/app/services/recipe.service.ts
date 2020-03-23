import { Injectable } from '@angular/core';
import Recipe from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
      new Recipe(
        0,
        'Torrijas',
        'Spanish Torrejas is a dessert',
        'https://images-gmi-pmc.edge-generalmills.com/06751e98-7ef7-43f9-b24a-2dd51dc16f1e.jpg',
        [
          new Ingredient('eggs', 5),
          new Ingredient('flour', 3),
          new Ingredient('sugar', 3)
        ]
      ),
      new Recipe(
        1,
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

  getRecipeBy(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
