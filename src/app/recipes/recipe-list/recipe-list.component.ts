import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Receta} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Receta>();
  recipes: Receta[];
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }
  onRecipeSelected(recipe: Receta) {
    this.recipeWasSelected.emit(recipe);
  }
}
