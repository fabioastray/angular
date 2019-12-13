import { Component, Input } from '@angular/core';
import Recipe from '../../../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() item: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    this.recipeService.recipeSelected.emit(this.item);
  }
}
