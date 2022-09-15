import ActionsType from "../ActionType";

interface getTrading {
type:ActionsType.GET_TRADING,
payload:any,
}
interface getRated {
type:ActionsType.GET_RATED,
payload:any,
}
interface getNewest {
type:ActionsType.GET_NEWEST,
payload:any,
}
interface getMovies {
    type:ActionsType.GET_MOVIES,
    payload:any
}

interface getTvSeries {
    type:ActionsType.GET_TV_SERIES,
    payload:any
}
interface getGanre {
    type:ActionsType.GET_GANRE,
    payload:any;
}

export type Action =  getTrading |  getRated |  getNewest | getMovies | getTvSeries | getGanre;
