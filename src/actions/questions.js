export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION="ADD_ANSWER_QUESTION"



export const recieveQuestion = (questions)=>{
    return {
        type:RECIEVE_QUESTIONS,
        questions
    }
    
}

export const addQestion =(question)=>{
    return{
        type:ADD_QUESTION,
        question
    }
}

export const SaveanswerQestion=(authedUser, qid , answer)=>{
    return{
        type:ADD_ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}




