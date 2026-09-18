export class Model {
  constructor() {}

  async fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
