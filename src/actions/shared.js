import { recieveUser } from "./users";
import { recieveQuestion } from "./questions";
import { authUser } from "./authedUser";
import getInitialData from "../uttlites/api";
import {showLoading , hideLoading} from 'react-redux-loading';
import { _saveQuestion } from "../uttlites/_DATA"
import { addQestion } from "./questions";
import { addUserQuestion } from "./users";
import { _saveQuestionAnswer } from "../uttlites/_DATA"
import { userAnswerQuestion } from "./users";
import { SaveanswerQestion } from "./questions";

const authedUser = null
export default function getAlldata(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions})=>{
            dispatch(recieveUser(users))
            dispatch(recieveQuestion(questions))
            dispatch(authUser(authedUser))
            dispatch(hideLoading())
        }).catch((err) =>{
            console.log('Error Has Been Occurred:', err)
        })
    }
}

export const saveQuestion = (optionOneText , optionTwoText)=>{
    return(dispatch , getState) =>{
    const {authedUser} = getState()
    return (_saveQuestion({
            optionOneText,
            optionTwoText,
            author:authedUser
    }))
    .then((question)=> {
        dispatch(addQestion(question))
        dispatch(addUserQuestion(authedUser,question.id))
    })
    
    .catch(err =>{
        console.log("Error" ,err)
        alert('Error Has Been Detected')
    })
  }
}


export const saveAnswer= (authedUser,qid,answer)=>{
    return(dispatch,)=>{
        const info ={
        authedUser,
        qid,
        answer
        }
      return  _saveQuestionAnswer(info)
      .then(()=> {
        alert('A Question Has Successfully Answered')
        dispatch(SaveanswerQestion(authedUser,qid,answer))
        dispatch(userAnswerQuestion(authedUser,qid,answer))
      }).catch((e)=>{
        console.warn('Error Has Been Deteced',e)
        alert('Error Has Been Detected ,Try Again')
      })
    }
  }
  
  
  