import {
  bigImgParams,
  filmInfoWrapperParams,
  filmParams,
  nameParams,
  overviewParams,
  ratingStarParams,
  ratingTextParams,
  ratingWrapperParams,
  wrapperParams,
} from "./filmparams";
import { Creator } from "./../tools/creator";

export class FilmView {
  filmCard;
  constructor(params) {
    this.filmCard = new Creator(filmParams).getTag();
    this.build(params);
  }
  build(params) {
    bigImgParams.attributes.src = `https://image.tmdb.org/t/p/w500/${params.backdrop_path}`;
    nameParams.text = params.title;
    ratingTextParams.text = params.vote_average;
    overviewParams.text = params.overview;
    const bigImg = new Creator(bigImgParams).getTag();
    const filmName = new Creator(nameParams).getTag();
    const filmWrapper = new Creator(wrapperParams).getTag();
    const ratingWrapper = new Creator(ratingWrapperParams).getTag();
    const ratingStar = new Creator(ratingStarParams).getTag();
    const ratingText = new Creator(ratingTextParams).getTag();
    const overview = new Creator(overviewParams).getTag();
    const info = new Creator(filmInfoWrapperParams).getTag();
    this.filmCard.append(filmWrapper, bigImg);
    filmWrapper.append(filmName, ratingWrapper, overview, info);
    info.append(ratingWrapper);
    ratingWrapper.append(ratingStar, ratingText);

    console.log(params);
  }
}
