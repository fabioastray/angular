import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Recipe from '../../../models/recipe.model';
import Ingredient from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() itemSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'a description1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('apple', 5),
        new Ingredient('tomato', 3)
      ]
    ),
    new Recipe(
      'A test recipe2',
      'a description2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('banana', 2),
        new Ingredient('pear', 4)
      ]
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(recipe: Recipe) {
    this.itemSelected.emit(recipe);
  }
}
