import filmCards from "../css/filmCards.module.css";
export const movielistParams = {
  tagName: "ul",
  classList: [filmCards.listMovies],
  attributes: {},
  text: "",
};
export const cardParams = {
  tagName: "li",
  classList: [filmCards.filmCard],
  attributes: { "data-card-id": "" },
  text: "",
};
export const movieImgParams = {
  tagName: "img",
  classList: [filmCards.img],
  attributes: { src: "" },
};
export const moviePosterParams = {
  tagName: "img",
  classList: [filmCards.poster],
  attributes: { src: "" },
};

export const movieTitleParams = {
  tagName: "h2",
  classList: [filmCards.title],
  attributes: {},
  text: "",
};

export const movieTitleWrapperParams = {
  tagName: "div",
  classList: [filmCards.wrapper],
  attributes: {},
};
export const ratingWrapperParams = {
  tagName: "div",
  classList: [filmCards.rating_wrapper],
  attributes: {},
};
export const ratingStarParams = {
  tagName: "div",
  classList: [filmCards.rating_star],
  attributes: {},
};

export const ratingTextParams = {
  tagName: "p",
  classList: [filmCards.rating_text],
  attributes: {},
  text: "",
};
