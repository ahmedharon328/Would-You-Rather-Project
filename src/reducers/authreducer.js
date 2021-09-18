import { SET_AUTHED_ID , USER_LOGGED_OUT } from "../actions/authedUser";

export const authedUser = (state = null , action)=>{
    switch (action.type){
        case SET_AUTHED_ID:
            return action.id
        case USER_LOGGED_OUT:
            return null
        default:
            return state
    }
}

