const baseUrl = "https://api.themoviedb.org/3/"
export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}
const api = "?api_key=04c35731a5ee918f014970082a0088b1";

const tmdbApi = {
    getMoviesList: (type:string,page:number, ) => {
        const url = baseUrl+'movie/'+type+api+`&page=${page}&per_page=10`;
        return url;
    },
      getSeriesList: (type:string,page:number, ) => {
        const url = baseUrl+'tv/'+type+api+'&page=1&per_page=10' 
        return url;
    },
    getMoviesPage:( type:string , page:number,ganre?:string,  ) => {
const url = baseUrl+"discover/"+type+api+`&page=${page}&per_page=20 `+'&with_genres='+ ganre; 
return url;
    },
    getMoviesByCategory: (type:string,page:number) => {
        const url = baseUrl+'movie/'+type+api+`&page=${page}&per_page=10 `;
        return url;
    },
     ganre:`https://api.themoviedb.org/3/genre/movie/list${api}&language=en-US`
   /*  getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    }, */
}

export default tmdbApi;

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
export const IMGPATH =
  "https://image.tmdb.org/t/p/w1280";
 
  export const IMGPATHCOVER =
  " https://image.tmdb.org/t/p/w300";
export const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
