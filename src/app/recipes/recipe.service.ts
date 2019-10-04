import {EventEmitter} from '@angular/core';
import {Receta} from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<>();

    private recipes: Receta[] = [
        new Receta(
            'Hummus',
            `En árabe, hummus significa simplemente garbanzo.`,
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Houmous.jpg/300px-Houmous.jpg'
        ),
        new Receta(
            `Carpaccio de solomillo de ternera fácil`,
            ` Plato típico de la cocina italiana elaborado a base de láminas muy finas de carne o pescado crudo`,
            `https://www.codigococina.com/wp-content/uploads/2016/12/como_hacer_carpaccio.jpg`
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}
