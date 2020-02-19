import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [RecipeStartComponent, RecipeEditComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
