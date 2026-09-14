import { Creator } from "../tools/creator";
import type { genre } from "../types/types";
import {
  genreButtonParams,
  headerParams,
  liParams,
  ulParams,
} from "./headerparams";

export class HeaderView {
  headerElem;
  genreData;

  constructor(genres: genre[]) {
    this.headerElem = new Creator(headerParams).getTag();
    this.genreData = genres;
  }
  //createHeader() {
  //const header = new Creator(headerParams).getTag();
  //return header;
  //}
  createMenu() {
    const genreList = new Creator(ulParams).getTag();
    this.genreData.forEach((movieGenre) => {
      genreButtonParams.text = movieGenre.name;
      genreButtonParams.attributes["data-name"] = movieGenre.name;
      const item = new Creator(liParams).getTag();
      const genreButton = new Creator(genreButtonParams).getTag();
      if (this.headerElem && genreList && item && genreButton) {
        genreList.append(item);
        item.append(genreButton);
      }
    });
    this.headerElem.append(genreList);
  }
}
