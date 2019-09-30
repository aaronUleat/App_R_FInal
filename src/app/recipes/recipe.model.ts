export class Receta {
  public nombre: string;
  public descripcion: string;
  public image: string;

  constructor(name: string, desc: string, image: string) {
    this.nombre = name;
    this.descripcion = desc;
    this.image = image;
  }
}
