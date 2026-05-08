import { Creator } from "../tools/creator";
import type { genre } from "../types/types";
import {
  genreButtonParams,
  headerParams,
  liParams,
  ulParams,
} from "./headerparams";

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
    const genreList = new Creator(ulParams).getTag();
    genres.forEach((movieGenre) => {
      genreButtonParams.text = movieGenre.name;
      const item = new Creator(liParams).getTag();
      const genreButton = new Creator(genreButtonParams).getTag();
      if (this.header && genreList && item && genreButton) {
        this.header.append(genreList);
        genreList.append(item);
        item.append(genreButton);
      }
    });
  }
}
