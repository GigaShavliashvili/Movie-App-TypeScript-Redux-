import { movie, tvSerie } from "../../models/movieCover";
import { Action } from "../actions/actionCreator/Types";
import ActionType from "../actions/ActionType";


interface MoviesCover{
    isLoading: boolean;
    data: movie[];
    error: string | boolean;
}
interface SeriesCover {
      isLoading: boolean;
    data: tvSerie[];
    error: string | boolean;  
}

interface Ganre  {
   namw:string,
    name:string,
}
type state = {
    movies: MoviesCover,
    tvSeries:  SeriesCover,
    ganre:{id:number, name:string}[],
}

const initialState:state ={
    movies:{
        isLoading:true,
        data:[],
        error:false,
    },
    tvSeries:{
        isLoading:true,
        data:[],
        error:false,
    },
    ganre:[]
}


export const getMoviesforPage = (state = initialState, action:Action):state => {
    const {type, payload} = action;
    switch(type){
        case ActionType.GET_MOVIES:{
            state.movies.isLoading = true;
         return {
            ...state,
            movies:{
            isLoading:false,
        data:payload.data?payload.data.results:false,
        error:payload.message?payload.message:false
        }}
        }

        case ActionType.GET_TV_SERIES:{

            return {
                ...state,
                 tvSeries:{
         isLoading:false,
        data:payload.data?payload.data.results:false,
        error:payload.message?payload.message:false
                 }
            }
        }
        case ActionType.GET_GANRE:{
            return {
                ...state,
                ganre:payload
            }
        }


        default:{
            return state
        }
    }
}