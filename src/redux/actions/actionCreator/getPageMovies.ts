
import axios from "axios";
import { Dispatch } from "redux";
import tmdbApi from "../../../Utils/Api";
import ActionsType from "../ActionType";
import { Action } from "./Types";

export const getMovies = (page:number, ganre?:string) =>{
    return (dispatch:Dispatch<Action>) => {
axios({
    method:"GET",
    url:tmdbApi.getMoviesPage("movie", page, ganre),
}).then((res) =>{
dispatch({type:ActionsType.GET_MOVIES, payload:res})
}).catch((err) =>{
dispatch({type:ActionsType.GET_MOVIES, payload:err})
})
    }
}


export const getTvSeries = (page:number, ganre?:string) =>{
  
    
    return (dispatch:Dispatch<Action>) => {
axios({
    method:"GET",
    url:tmdbApi.getMoviesPage("tv",page, ganre),
}).then((res) =>{
dispatch({type:ActionsType.GET_TV_SERIES, payload:res})
}).catch((err) =>{
dispatch({type:ActionsType.GET_TV_SERIES, payload:err})
})
    }
}

export const getGanre = () =>{
    return (dispatch:Dispatch<Action>) =>{
        axios({
            method:"GET",
            url:tmdbApi.ganre,
        }).then((res) =>{
          dispatch({type:ActionsType.GET_GANRE, payload:res.data.genres})
            
        }).catch((err) =>{
            console.log(err);
            
        })
    }
}



