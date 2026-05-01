import type { genre } from "../types/types";
import { HeaderView } from "./headerview";

export class View {
  headerElem;
  app;
  constructor() {
    this.headerElem = new HeaderView();
    this.app = document.querySelector("#app");
    this.app?.append(this.headerElem.header);
  }
  build(genres: genre[]) {
    this.headerElem.createMenu(genres);
  }
}
