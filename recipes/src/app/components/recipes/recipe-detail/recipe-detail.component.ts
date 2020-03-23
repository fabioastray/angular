import { Component, OnInit } from '@angular/core';
import Recipe from '../../../models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  successMessage = {
    show: false,
    title: 'Success',
    body: 'Ingredients added to shopping list'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipe = this.recipeService.getRecipeBy(+params.get('id'));
      if (!this.recipe) {
        this.backToRecipes();
      }
    });
  }

  backToRecipes() {
    this.router.navigate(['/recipes']);
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    this.successMessage.show = true;
  }

  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
