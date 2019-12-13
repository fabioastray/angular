import { Component, OnInit } from '@angular/core';

import Recipe from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.onRecipeSelected(recipe));
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
