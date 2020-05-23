import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('editForm') editForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
                            .subscribe((index) => {
                              this.editMode = true;
                              this.editedIndex = index;
                              this.editedItem = this.shoppingListService.getIngredient(index);
                              this.editForm.setValue({
                                name: this.editedItem.name,
                                amount: this.editedItem.amount
                              });
                            });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const formValue = form.value;
    const ingredient = new Ingredient(
      formValue.name,
      formValue.amount
    );
    if (!this.editMode) {
      this.shoppingListService.addIngredient(ingredient);
    } else {
      this.shoppingListService.editIngredient(this.editedIndex, ingredient);
      this.editMode = false;
    }
    form.reset();
  }

  onReset(form: NgForm) {
    if (this.editMode) {
      this.editMode = false;
    }
    form.reset();
  }

  onDelete(form: NgForm) {
    if (typeof this.editedIndex !== 'undefined') {
      this.shoppingListService.deleteIngredient(this.editedIndex);
      this.onReset(form);
      this.editedIndex = undefined;
      this.editedItem = undefined;
    }
  }
}
