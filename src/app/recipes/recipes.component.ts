import {Component, OnInit} from '@angular/core';
import {Receta} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Receta;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
      this.recipeService.recipeSelected
        .subscribe(
          ( recipe: Receta ) => {
            this.selectedRecipe = recipe;
          }
        );
    }

}
