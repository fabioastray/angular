import { Component, OnInit } from '@angular/core';

import Recipe from '../../models/recipe.model';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [LoggingService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private logger: LoggingService) { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.logger.log('recipe selected', recipe);
  }

}
