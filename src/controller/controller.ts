import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
  private model: Model;
  private view: View;

  constructor() {
    this.model = new Model();
    this.view = new View();

    this.init();
  }

  private async init(): Promise<void> {
    try {
      await this.model.fetchGenres();

      this.view.build(this.model.genreData.genres);

      this.setListeners();
    } catch (error) {
      console.error("Failed to initialize application:", error);
    }
  }

  private setListeners(): void {
    this.view.app?.addEventListener("click", async (event) => {
      const isElement = event.target as HTMLElement;
      if (isElement) {
        const isButton = isElement.closest("[data-name]");
        const isCard = isElement.closest("[data-card-id]");

        if (isButton) {
          const isGenreId = isButton.getAttribute("data-id");
          await this.model.fetchMovies(isGenreId);
          await this.view.renderMovies(this.model.currentMovies);
        }

        if (isCard) {
          console.log();
          await this.model.getFilmInfoById(isCard.getAttribute("data-card-id"));
        }
      }
    });
  }
}
