import { Model } from "../model/model";
import { View } from "./../view/view";

export class Controller {
  private model;
  private view;
  genres;

  constructor() {
    this.model = new Model();
    this.view = new View();
    this.genres = this.getGenres();
    this.view.build(this.genres);
  }

  async getGenres() {
    const data = await this.model.fetchData();
    return data;
  }
}
