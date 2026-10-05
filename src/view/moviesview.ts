import { Creator } from "../tools/creator";
import { cardParams, movieImgParams, movielistParams } from "./moviesparams";

export class Movies {
  listElement;
  dataArray;
  constructor(movies) {
    this.dataArray = movies.results;
    this.listElement = new Creator(movielistParams).getTag();
  }
  createListCards() {
    this.dataArray.forEach((film) => {
      console.log(film);
      movieImgParams.attributes.src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
      const img = new Creator(movieImgParams).getTag();
      const filmCard = new Creator(cardParams).getTag();
      this.listElement.append(filmCard);
      filmCard.append(img);
    });
  }
}
