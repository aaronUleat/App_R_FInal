import {Ingredient} from '../shared/ingredient.model';

export class Receta {
  public nombre: string;
  public descripcion: string;
  public image: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, image: string, ingredients: Ingredient[]) {
    this.nombre = name;
    this.descripcion = desc;
    this.image = image;
    this.ingredients = ingredients;
  }
}
