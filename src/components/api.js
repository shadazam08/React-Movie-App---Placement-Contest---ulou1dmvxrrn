const API_KEY = "64cb9bc3cfa735142d5b56af66f8d74a";
const API_READ_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGNiOWJjM2NmYTczNTE0MmQ1YjU2YWY2NmY4ZDc0YSIsInN1YiI6IjY0MjkzMDA4YTNlNGJhMDExMTRhNTEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nT30W3A3RzQlqlDw_uGS6J7XtaKU32IKwVxNxyQ4QtA";

export const searchMovieData = async (movieName) => {
    const query = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
    const response = await fetch(query);
    return response.json();
};
export const getMovieById = async (id) => {
    const query = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-us`;
    const response = await fetch(query);
    return response.json();
};
