import { Creator } from "../tools/creator";
import { mainParams } from "./mainparams";

export class MainView {
  main;

  constructor() {
    this.main = new Creator(mainParams).getTag();
  }
}
