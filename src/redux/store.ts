
import { useDispatch } from "react-redux";
import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getMoviesReducer } from "./reducer/getMoviesforHome";
import { getMoviesforPage } from "./reducer/getMoviesforPages";
const rootReducer = combineReducers({
    diffMovies: getMoviesReducer,
    moviesAndseriesForPage:getMoviesforPage
})
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;