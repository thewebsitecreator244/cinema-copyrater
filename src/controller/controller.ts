import { Model } from "../model/model";
import { View } from "./../view/view";

export class Controller {
  private model;
  private view;

  constructor() {
    this.model = new Model();
    this.view = new View();
    this.init();
  }

  async init() {
    const data = await this.model.fetchData();
    console.log(data);
    this.view.build(data.genres);
  }
}
