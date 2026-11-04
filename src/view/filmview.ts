import { filmParams } from "./filmparams";
import { Creator } from "./../tools/creator";

export class FilmView {
  filmCard;
  constructor(params) {
    this.filmCard = new Creator(filmParams).getTag();
    console.log(params);
  }
}
