import { Creator } from "../tools/creator";
import { FilmView } from "./filmview";
import { mainParams } from "./mainparams";
import { Movies } from "./moviesview";

export class MainView {
  mainElem;
  listObj;
  filmObj;

  constructor() {
    this.mainElem = new Creator(mainParams).getTag();
    this.listObj = new Movies();
    this.filmObj = null;
  }
  createFilm(params) {
    this.filmObj = new FilmView(params);
    this.mainElem.append(this.filmObj.filmCard);
  }
}
