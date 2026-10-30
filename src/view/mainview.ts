import { Creator } from "../tools/creator";
import { mainParams } from "./mainparams";
import { Movies } from "./moviesview";

export class MainView {
  mainElem;
  listObj;

  constructor() {
    this.mainElem = new Creator(mainParams).getTag();
    this.listObj = new Movies();
  }
}
