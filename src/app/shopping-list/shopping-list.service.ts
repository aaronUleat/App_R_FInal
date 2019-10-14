import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredientes: Ingredient[] = [
    new Ingredient('Manzanas', 5),
    new Ingredient('Tomates', 10)
  ];

  getIngredients() {
    return this.ingredientes.slice();
  }

  getIngredient(index: number) {
    return this.ingredientes[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientes.push( ingredient );
    this.ingredientChanged.emit( this.ingredientes.slice() );
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredientes.push(...ingredients);
    this.ingredientChanged.emit(this.ingredientes.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredientes[index] = newIngredient;
    this.ingredientChanged.next(this.ingredientes.slice());
  }

  deleteIngredient(index: number) {
    this.ingredientes.splice(index, 1);
    this.ingredientChanged.next(this.ingredientes.slice());
  }
}
