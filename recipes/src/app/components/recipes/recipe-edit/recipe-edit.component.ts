import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AbstractControl, Form, FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import Recipe from '../../../models/recipe.model';
import {RecipeService} from '../../../services/recipe.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode = false;
  recipeForm: FormGroup;
  editedRecipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private matSnackBarService: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.editMode = params.has('id');

      if (this.editMode) {
        this.editedRecipe = this.recipeService.getRecipeBy(id);
      }

      this.initForm();
    });
  }

  private initForm() {
    const name = this.editMode ? this.editedRecipe.name : '';
    const imagePath = this.editMode ? this.editedRecipe.imagePath : '';
    const description = this.editMode ? this.editedRecipe.description : '';
    const ingredients = this.editMode ? this.editedRecipe.ingredients.map(ing => this.ingredientFormGroup(ing.name, ing.amount)) : [];

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: new FormArray(ingredients)
    });
  }

  private ingredientFormGroup(name: string, amount: number): FormGroup {
    return new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)// only numbers greater than zero
      ])
    });
  }

  get ingredientsAsFormArray(): FormArray {
    return (this.recipeForm.get('ingredients') as FormArray);
  }

  get ingredientsControls(): AbstractControl[] {
    return this.ingredientsAsFormArray.controls;
  }

  deleteIngredient(index: number) {
    if (confirm('Are you sure you want to delete this ingredient?')) {
      this.ingredientsAsFormArray.removeAt(index);
    }
  }

  deleteAllIngredients() {
    if (this.ingredientsAsFormArray.length > 0 && confirm('Are you sure you want to delete all the ingredients?')) {
      this.ingredientsAsFormArray.clear();
    }
  }

  addIngredient() {
    return this.ingredientsAsFormArray.push(
      this.ingredientFormGroup(null, null)
    );
  }

  onSubmit() {
    let action = '';

    if (!this.editMode) {
      action = 'created';
      const recipe = this.recipeForm.value;
      this.recipeService.addRecipe(recipe);
    } else {
      action = 'updated';
      const recipe = Object.assign(this.recipeForm.value, {
        id: this.editedRecipe.id
      });
      this.recipeService.editRecipe(recipe);
    }

    this.matSnackBarService.open(`Recipe ${action}!`, null, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });

    this.navigateToRecipes();
  }

  navigateToRecipes() {
    this.router.navigate(['/recipes']);
  }
}
