import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingEditComponent]
})
export class ShoppingListComponent implements OnInit {
  ingredientes: Ingredient[];
  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientes = this.slService.getIngredients();
    this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredientes = ingredients;
        }
      );
  }

}
