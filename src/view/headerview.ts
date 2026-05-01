import { Creator } from "../tools/creator";
import type { genre } from "../types/types";
import { headerParams } from "./headerparams";

export class HeaderView {
  header;

  constructor() {
    this.header = this.createHeader();
  }
  createHeader() {
    const header = new Creator(headerParams).getTag();
    return header;
  }
  createMenu(genres: genre[]) {
    genres.forEach((movieGenre) => {
      console.log(movieGenre);
    });
  }
}
