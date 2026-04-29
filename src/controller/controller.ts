import { Model } from "../model/model";
import { View } from "./../view/view";

export class Controller {
  private model;
  private view;

  constructor() {
    this.model = new Model();
    this.view = new View();
    this.getGenres();
  }

  async getGenres() {
    const data = await this.model.fetchData();
    console.log(data);
  }
}
