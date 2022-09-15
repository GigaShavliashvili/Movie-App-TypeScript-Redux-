import { Action, Dispatch } from "redux";
import ActionsType from "../ActionType";
import { movie } from "../../../models/movieCover";
import axios from "axios"
import tmdbApi from "../../../Utils/Api";


export const getTradingmovies = () =>{
    return (dispatch:Dispatch<Action>) => {
axios({
method: "GET",
url:`${tmdbApi.getMoviesList("top_rated", 1, )}`,

}).then((res) =>{
    dispatch({type:ActionsType.GET_TRADING, payload:res})
}).catch((err) =>{
    console.log(err); 
     dispatch({type:ActionsType.GET_TRADING, payload:err})
})
//----------------------------------------------------------------
    }
}

export const getRatedgmovies = () =>{
    return (dispatch:Dispatch<Action>) => {
axios({
method: "GET",
url:`${tmdbApi.getMoviesList("popular", 1)}`,

}).then((res) =>{
    dispatch({type:ActionsType.GET_RATED, payload:res})
}).catch((err) =>{
    console.log(err); 
     dispatch({type:ActionsType.GET_RATED, payload:err})
})
//----------------------------------------------------------------
    }
}

export const getNewestgmovies = () =>{
    return (dispatch:Dispatch<Action>) => {
axios({
method: "GET",
url:`${tmdbApi.getMoviesList("upcoming", 1)}`,

}).then((res) =>{
    dispatch({type:ActionsType.GET_NEWEST, payload:res})
}).catch((err) =>{
    console.log(err); 
     dispatch({type:ActionsType.GET_NEWEST, payload:err})
})
//----------------------------------------------------------------
    }
}



