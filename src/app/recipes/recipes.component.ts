import { Component, OnInit } from '@angular/core';
import {Receta} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Receta;
  constructor() { }

  ngOnInit() {
  }

}
