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
  attributes: {},
  text: "",
};
export const movieImgParams = {
  tagName: "img",
  classList: [filmCards.img],
  attributes: { src: "" },
};

export const movieTitleParams = {
  tagName: "h2",
  classList: [filmCards.title],
  attributes: {},
  text: "",
};
