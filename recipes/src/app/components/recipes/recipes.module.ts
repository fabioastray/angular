import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [RecipeStartComponent, RecipeEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
