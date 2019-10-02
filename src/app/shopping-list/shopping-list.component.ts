import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredientes: Ingredient[] = [
    new Ingredient('Manzanas', 5),
    new Ingredient('Tomates', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIgredientAddeded(ingredient: Ingredient) {
    this.ingredientes.push(ingredient);
  }

}
