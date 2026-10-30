import { Creator } from "../tools/creator";
import {
  cardParams,
  movieImgParams,
  movielistParams,
  moviePosterParams,
  movieTitleParams,
  movieTitleWrapperParams,
  ratingStarParams,
  ratingTextParams,
  ratingWrapperParams,
} from "./moviesparams";

export class Movies {
  listElement;

  constructor() {
    //this.dataArray = movies.results;
    this.listElement = new Creator(movielistParams).getTag();
  }
  createListCards(dataArray) {
    this.clearList();
    dataArray.results.forEach((film) => {
      console.log(film);
      movieImgParams.attributes.src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
      moviePosterParams.attributes.src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
      movieTitleParams.text = film.title;
      cardParams.attributes["data-card-id"] = film.id;
      if (film.vote_average != 0) {
        ratingTextParams.text = film.vote_average;
      } else {
        ratingTextParams.text = "no rating yet";
      }
      const img = new Creator(movieImgParams).getTag();
      const poster = new Creator(moviePosterParams).getTag();
      const title = new Creator(movieTitleParams).getTag();
      const filmCard = new Creator(cardParams).getTag();
      const wrapper = new Creator(movieTitleWrapperParams).getTag();
      const ratingWrapper = new Creator(ratingWrapperParams).getTag();
      const ratingStar = new Creator(ratingStarParams).getTag();
      const ratingText = new Creator(ratingTextParams).getTag();
      wrapper.append(title);
      this.listElement.append(filmCard);
      filmCard.append(img, poster);
      filmCard.append(wrapper);
      wrapper.append(ratingWrapper);
      ratingWrapper.append(ratingText, ratingStar);
    });
  }
  removeElem() {
    this.listElement.remove();
  }
  clearList() {
    this.listElement.innerHTML = "";
  }
}
