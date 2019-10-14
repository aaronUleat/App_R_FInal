import {EventEmitter, Injectable} from '@angular/core';
import {Receta} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Receta[]>()
    recipeSelected = new EventEmitter<Receta>();

    constructor( private slService: ShoppingListService) {}

    private recipes: Receta[] = [
        new Receta(
            'Hummus',
            `En árabe, hummus significa simplemente garbanzo.`,
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Houmous.jpg/300px-Houmous.jpg',
          [
            new Ingredient('Garbanzos', 50),
            new Ingredient('Ajos', 10),
          ]
        ),
        new Receta(
            `Carpaccio de solomillo de ternera fácil`,
            ` Plato típico de la cocina italiana elaborado a base de láminas muy finas de carne o pescado crudo`,
            `https://www.codigococina.com/wp-content/uploads/2016/12/como_hacer_carpaccio.jpg`,
          [
            new Ingredient('Carne', 1),
            new Ingredient('Espinacas', 5)
          ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe( index: number ) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Receta) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Receta) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
