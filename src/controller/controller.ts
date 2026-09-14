import { Model } from "../model/model";
import { View } from "./../view/view";

export class Controller {
  private model;
  private view;

  constructor() {
    this.model = new Model();
    this.view = new View();
    this.init();
    this.setListeners();
  }

  async init() {
    const data = await this.model.fetchData();
    this.view.build(data.genres);
  }
  setListeners() {
    this.view.header.headerElem?.addEventListener("click", (event) => {
      console.log(event);
    });
  }
}
