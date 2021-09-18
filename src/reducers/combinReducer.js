import { combineReducers } from "redux";
import { users } from "./usersReducer";
import { questions } from "./questionReducer";
import { authedUser } from "./authreducer";
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
})