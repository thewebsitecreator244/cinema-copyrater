import { HeaderView } from "./headerview";
import type { genre } from "../types/types";
//import { Movies } from "./moviesview";
import { MainView } from "./mainview";

export class View {
  app: HTMLElement | null;
  header: HeaderView | null = null;
  main;

  constructor() {
    this.app = document.querySelector("#app");
  }

  build(genres: genre[]): void {
    this.header = new HeaderView(genres);
    this.main = new MainView();

    this.app?.append(this.header.headerElem, this.main.mainElem);
  }
  async renderMovies(movies) {
    this.main.listObj.createListCards(movies);
    this.app?.append(this.main.listObj.listElement);
  }
}
