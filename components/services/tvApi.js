import {
  APP_KEY,
  BASE_URL,
  POPULAR_TV_URL,
  ON_THE_AIR_TV_URL,
  AIRING_TODAY_TV_URL
} from "../config/tmdb_api_config";

const fetchTvShowsFromApi = async (selectedFilter) => {
  console.log(selectedFilter);

  const getPopularTvShows = async () => {
    const url = BASE_URL + POPULAR_TV_URL + "?api_key=" + APP_KEY;
    const fetchData = async () => {
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      return response;
    };

    return await fetchData();
  };

  const getOnTheAirShows = async () => {
    const url = BASE_URL + ON_THE_AIR_TV_URL + "?api_key=" + APP_KEY;
    const fetchData = async () => {
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      return response;
    };

    return await fetchData();
  };

  const getAiringTodayTvShows = async () => {
    const url = BASE_URL + AIRING_TODAY_TV_URL + "?api_key=" + APP_KEY;
    const fetchData = async () => {
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      return response;
    };

    return await fetchData();
  };

//  const swithFunction = async (filter) => {
//   switch(filter) {
//     case "top_rated":
//       return await getTopRatedMovies();
//     case "popular":
//       return await getPopularMovies();
//     case "now_playing":
//       return await getNowPlayingMovies();
//   } 

//  }
//   return await swithFunction(selectedFilter);

  return getAiringTodayTvShows();
};

export default fetchMoviesFromApi;
