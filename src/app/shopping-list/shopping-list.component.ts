import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingEditComponent]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientes: Ingredient[];
  private ingChangeSub: Subscription;
  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientes = this.slService.getIngredients();
    this.ingChangeSub = this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredientes = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }

}
