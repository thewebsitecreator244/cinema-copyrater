import { HeaderView } from "./headerview";
import type { genre } from "../types/types";
import { Movies } from "./moviesview";
import { MainView } from "./mainview";

export class View {
  app: HTMLElement | null;
  header: HeaderView | null = null;
  movieList;
  main;

  constructor() {
    this.app = document.querySelector("#app");
    this.main = new MainView();
  }

  build(genres: genre[]): void {
    this.header = new HeaderView(genres);

    this.app?.append(this.header.headerElem);
  }
  async renderMovies(movies) {
    this.movieList = new Movies(movies);
    this.movieList.createListCards();
    this.app?.append(this.movieList.listElement);
  }
}
