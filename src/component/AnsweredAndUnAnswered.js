import React ,{Component} from "react";
import { connect } from "react-redux";

import Questions from "./Questions";

class UnAnswered extends Component{

    state={
        page : 'answered'
    }

    handleToggle=(value)=>{
        if (this.state.page !== value){
            this.setState({
                page:value
            })

        }
    }
    render(){
        // console.log(this.props)
        const {answeredQuestion , unAnsweredQuestion}= this.props
        console.log(this.props)
        return(            
           <div className='container bg-light '>
               <div className='align-items-center justify-content-center bg-light row my-5'>
                   <ul className='list-unstyled text-center   '>
                     <li className='btn btn-primary ms-2 my-1'  onClick={()=> this.handleToggle('answered')} > Answered {answeredQuestion.length} </li>
                     <li className='btn btn-primary ms-2 my-1'onClick={()=> this.handleToggle('unanswered')}>UnAnswered {unAnsweredQuestion.length}</li>
                   </ul>
               </div>

                {this.state.page === 'answered' &&(
                        <div className='row g-3 row-cols-2 my-5 align-items-center d-flex  '>
                        { answeredQuestion === null ? null : (
                                answeredQuestion.map((id)=>(
                                <div key={id}>
                                    <Questions id={id} route='answered' />
                                </div>
                            ))
                        )}
                    </div>
                )}

               {this.state.page === 'unanswered' &&(
                   <div className='row g-3 row-cols-2  my-3 justify-content-start bg-light'>
                   {unAnsweredQuestion === null ? null :(
                    unAnsweredQuestion.map((id)=>(
                        <div  key={id} >
                        <Questions id={id} route='unanswered' />
                        </div>
                    ))
                )}
                </div>
               )}
           </div>
        )
    }
}

const mapStateToProps =({users,authedUser,questions})=>{
    const questionID = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    const answeredQuestion = authedUser ? Object.keys(users[authedUser].answers):null
    const unAnsweredQuestion = answeredQuestion ? questionID.filter(question => !answeredQuestion.includes(question) ) : null

    return{
        answeredQuestion ,
        unAnsweredQuestion
    }
}

export default connect(mapStateToProps)(UnAnswered)
