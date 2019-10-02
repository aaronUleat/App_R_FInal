import {Component, Input, OnInit} from '@angular/core';
import {Receta} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Receta;
  constructor() { }

  ngOnInit() {
  }

}
