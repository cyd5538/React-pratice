const key = 'd870f2b9a26bea64fcceaedaec8777f6';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ko-KR&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-KR&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ko-KR&page=1`,
  };

  export default requests