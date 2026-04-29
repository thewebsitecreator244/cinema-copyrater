import { Model } from "../model/model";

export class Controller {
  private model;

  constructor() {
    this.model = new Model();
    this.getGenres();
  }

  async getGenres() {
    const data = await this.model.fetchData();
    console.log(data);
  }
}
