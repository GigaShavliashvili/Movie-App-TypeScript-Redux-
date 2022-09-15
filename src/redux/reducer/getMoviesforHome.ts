
import { log } from "console";
import { movie } from "../../models/movieCover"
import { Action } from "../actions/actionCreator/Types";
import ActionType from "../actions/ActionType";

interface MoviesCover {
isLoading:boolean;
data:movie[];
error:boolean | string;
}


type state = {
    Trading:MoviesCover,
    Rated:MoviesCover,
    Newest: MoviesCover,
}

const initialState:state ={
    Trading:{
        isLoading:true,
        data:[],
        error:false
    },
      Rated:{
        isLoading:true,
        data:[],
        error:false
    },
    Newest:{
        isLoading:true,
        data:[],
        error:false
    }
}

export const getMoviesReducer = (state = initialState, action:Action):state =>{
 const {type, payload} = action;
    switch(type){
        case ActionType.GET_TRADING:{
          
return { 
    ...state,
    Trading:{
        isLoading:false,
        data:payload.data?payload.data.results:false,
        error:payload.message?payload.message:false
    }
}
        }
                case ActionType.GET_NEWEST:{
      
return { 
    ...state,
     Rated:{
        isLoading:false,
        data:payload.data?payload.data.results:false,
        error:payload.message?payload.message:false
    }
}
        }
                case ActionType.GET_RATED:{
           
return { 
    ...state,
     Newest:{
        isLoading:false,
        data:payload.data?payload.data.results:false,
        error:payload.message?payload.message:false
    }
}
        }
        default:
            return state;
    }
}
