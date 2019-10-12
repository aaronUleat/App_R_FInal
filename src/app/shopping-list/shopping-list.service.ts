import { Subject } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
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
    this.ingredientChanged.next( this.ingredientes.slice() );
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredientes.push(...ingredients);
    this.ingredientChanged.next(this.ingredientes.slice());
  }

  updateIngredient(index:number, newIngredient: Ingredient) {
    this.ingredientes[index] = newIngredient;
    this.ingredientChanged.next(this.ingredientes.slice());
  }
}
