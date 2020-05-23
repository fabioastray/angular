import {Component, OnDestroy, OnInit} from '@angular/core';

import Recipe from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  private recipesChangedSubscription: Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

  ngOnDestroy() {
    this.recipesChangedSubscription.unsubscribe();
  }
}
