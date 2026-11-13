import { bigImgParams, filmParams } from "./filmparams";
import { Creator } from "./../tools/creator";

export class FilmView {
  filmCard;
  bigImg;
  constructor(params) {
    bigImgParams.attributes.src = `https://image.tmdb.org/t/p/w500/${params.backdrop_path}`;
    this.filmCard = new Creator(filmParams).getTag();
    this.bigImg = new Creator(bigImgParams).getTag();
    this.filmCard.append(this.bigImg);
    console.log(params);
  }
}
