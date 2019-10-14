import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingEditComponent]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientes: Ingredient[];
  private subscription: Subscription;

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientes = this.slService.getIngredients();
    this.subscription =  this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredientes = ingredients;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
