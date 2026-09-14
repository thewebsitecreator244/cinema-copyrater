import { HeaderView } from "./headerview";

export class View {
  header;
  app;
  constructor() {
    this.app = document.querySelector("#app");
    this.header = new HeaderView();
    this.app?.append(this.header.headerElem);
    console.log(this.header);
  }
  //build() {
  //this.header.createMenu();
  //}
}
