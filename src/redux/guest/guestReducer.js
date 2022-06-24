import { TRENDING } from "./guestTypes";

const guestReducer = (state='', action)=>{
    switch(action.type){
        case TRENDING: 
            return action.payload;

        default: return state;
    }
}

export default guestReducer;