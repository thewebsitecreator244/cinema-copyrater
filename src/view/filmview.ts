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
  yearParams,
  runtimeParams,
  genresListParams,
  genresLiParams,
  filmAParams,
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
    yearParams.text = params.release_date.slice(0, 4);
    runtimeParams.text = `${params.runtime}min`;
    filmAParams.attributes.href = params.homepage;
    const list = new Creator(genresListParams).getTag();
    params.genres.forEach((genre) => {
      genresLiParams.text = genre.name;
      const li = new Creator(genresLiParams).getTag();
      list.append(li);
    });

    const bigImg = new Creator(bigImgParams).getTag();
    const filmName = new Creator(nameParams).getTag();
    const filmWrapper = new Creator(wrapperParams).getTag();
    const ratingWrapper = new Creator(ratingWrapperParams).getTag();
    const ratingStar = new Creator(ratingStarParams).getTag();
    const ratingText = new Creator(ratingTextParams).getTag();
    const overview = new Creator(overviewParams).getTag();
    const info = new Creator(filmInfoWrapperParams).getTag();
    const year = new Creator(yearParams).getTag();
    const runtime = new Creator(runtimeParams).getTag();
    const filmA = new Creator(filmAParams).getTag();

    this.filmCard.append(filmWrapper, bigImg, filmA);
    filmWrapper.append(filmName, ratingWrapper, overview, info);
    info.append(ratingWrapper, year, runtime, list);
    ratingWrapper.append(ratingStar, ratingText);

    console.log(params);
  }
}
