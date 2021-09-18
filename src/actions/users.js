export const RECEIVE_USER = 'RECEIVE_USER'
export const ADD_USER_QUESTION ='ADD_USER_QUESTION'
export const USER_ANSWER_QUESTION='USER_ANSWER_QUESTION'


export const recieveUser = (users)=>{
    return{
        type:RECEIVE_USER,
        users
    }
   
}
export const addUserQuestion = (authedUser, user)=> {
    return {
      type: ADD_USER_QUESTION,
      authedUser,
      user
    }
}

export const userAnswerQuestion = (authedUser, qid, answer )=>{
  return{
    type:USER_ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}


