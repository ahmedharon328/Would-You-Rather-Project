import { RECEIVE_USER , ADD_USER_QUESTION, USER_ANSWER_QUESTION } from "../actions/users";


export const users=(state={},action)=>{
    switch(action.type){
        case RECEIVE_USER:
            return {
                ...state,
                ...action.users
            }
            case ADD_USER_QUESTION:
                return { ...state,
                    [action.authedUser]: { 
                        ...state[action.authedUser],
                       questions: state[action.authedUser].questions.concat([action.user])
                    }
                }
                case USER_ANSWER_QUESTION:
                    return {
                        ...state,
                        [action.authedUser] : {
                          ...state[action.authedUser],
                          answers : {
                            ...state[action.authedUser].answers,
                            [action.qid] : action.answer
                          }
                        }
                      }
        default:
            return state
    }
}

