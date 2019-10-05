import {Component, Input, OnInit} from '@angular/core';
import {Receta} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Receta;

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit( this.recipe );
  }

}
