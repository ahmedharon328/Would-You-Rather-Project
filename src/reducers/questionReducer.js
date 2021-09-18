import { RECIEVE_QUESTIONS , ADD_QUESTION, ADD_ANSWER_QUESTION } from "../actions/questions";
// import { USER_ANSWER_QUESTION } from "../actions/users";

export const questions=(state={},action)=>{
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
            case ADD_QUESTION:
             const {question}=action
                return {
                    ...state,
                [question.id]:question
            }
                case ADD_ANSWER_QUESTION:
                return {
                    ...state,
                    [action.qid]: {
                    ...state[action.qid],
                        [action.answer]: {
                            ...state[action.qid][action.answer],
                            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }   
}