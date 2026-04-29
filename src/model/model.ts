export class Model {
  constructor() {}

  async fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFmZmU1YTRmZDNlZTI4NmQwNGQ3ODk5MzRhMzkxNiIsIm5iZiI6MTc3NTU2NTU2Ny40MDQsInN1YiI6IjY5ZDRmYWZmYWQ3NTZiYTk0ZTMxM2M5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4XKIvtuGADbDl7ONjaYZnVTpJYWg45VCzhEniyp2maw",
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
