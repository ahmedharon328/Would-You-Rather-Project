import React ,{Component} from "react";
import { connect } from "react-redux";
import { saveAnswer } from "../actions/shared";
import { Redirect} from 'react-router-dom'



class DetailPage extends Component{
    state={
        optionSelected:null,
    }
    handleChange=(e)=>{
        this.setState({
            optionSelected:e.target.value
        })
    }
    handleSumbit=(e)=>{
        e.preventDefault()
        const {optionSelected} = this.state
        const {authedUser}= this.props
        const qid= this.props.match.params.id
        this.props.dispatch(saveAnswer(authedUser , qid , optionSelected))
    }
    w
    render(){
    
        const {users,questions , authedUser }=this.props
        const answersQestion = questions ? users[authedUser].answers:null
        const {id} = this.props.match.params
        const qid = id ? questions[id] : null
        const user = qid ? users[qid.author]:null
        let allanswers ;
        if(user === null){
           return <Redirect to='/notfound' />
        }
        if(answersQestion.hasOwnProperty(qid.id)){
            allanswers = answersQestion[qid.id]
        }
        const qidOptionOne = qid.optionOne.votes.length
        const qidOptionTwo = qid.optionTwo.votes.length
        let percentOne = ((qidOptionOne / (qidOptionOne + qidOptionTwo)) * 100)
        let percentTwo = ((qidOptionTwo / (qidOptionOne + qidOptionTwo)) * 100)
        percentOne = Number.parseFloat(percentOne).toPrecision(3)
        percentTwo = Number.parseFloat(percentTwo).toPrecision(3)
        



        console.log(allanswers , answersQestion , qid.id )        
        return( 
            <div className='container-lg bg-light mt-5'>
                {allanswers ? 
                    <div className='row my-5 align-items-center justify-content-center'>
                      <div className='col-4 col-lg-4 col-xl-3'>
                        <div className='card border-1 border-primary'>
                          <img src={user.avatarURL} alt={user.name} className='card-img-top' width='50%'/>
                            <div className='card-body text-center py-4'>
                              <h4 className='card-title my-1'>{user.name}</h4>
                            <p className='lead-card-subitile'>
                              <strong>Asks</strong>  Would you rather <br/>
                            </p>
                            <form >
                            <div className='form-check'>
                                 <input type="radio"  name="question" id="flexRadioDefault1" checked={allanswers=== 'optionOne'} className='form-check-input' readOnly />
                                 <label htmlFor="question" className='form-check-label'>{ qid.optionOne.text}</label>         
                            </div>
                            <div className="progress my-3">
                            <div className="progress-bar" role="progressbar" style={{width:`${percentOne}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{percentOne}%</div>  
                            </div>
                            <div className='form-check'>
                                 <input type="radio"  name="question" checked={allanswers === 'optionTwo'} readOnly className='form-check-input'/>
                                 <label htmlFor="question" className='form-check-label' >{qid.optionTwo.text} </label>         
                            </div>
                            </form>
                            <div className='progress mt-3'>
                            <div className="progress-bar" role="progressbar" style={{width:`${percentTwo}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{percentTwo}%</div>
                            </div>
                            <p className='fw-bold text-danger mt-3'>
                                Total Votes = {qidOptionOne + qidOptionTwo}
                            </p>
                       </div>
                     </div>
                   </div>
                 </div>
                
                :
                <div className='row my-5 align-items-center justify-content-center'>
                    <div className='col-4 col-lg-4 col-xl-3'>
                     <div className='card border-1 border-primary'>
                         <img src={user.avatarURL} alt={user.name} className='card-img-top' width='50%'/>
                         <div className='card-body text-center py-4'>
                             <h4 className='card-title my-1'>{user.name}</h4>
                            <p className='lead-card-subitile'>
                              <strong>Asks</strong>  Would you rather <br/>
                            </p>
                            <form onSubmit={this.handleSumbit} > 
                            <div className='form-check'>
                                 <input type="radio"  name="question" id="flexRadioDefault1" onChange={this.handleChange} value='optionOne' className='form-check-input' />
                                 <label htmlFor="question" className='form-check-label'>{ qid.optionOne.text}</label>         
                            </div>
                            <div className='form-check'>
                                 <input type="radio"  name="question" value='optionTwo' className='form-check-input' onChange={this.handleChange}/>
                                 <label htmlFor="question" className='form-check-label' >{qid.optionTwo.text}</label>         
                            </div>
                                <button className='btn btn-primary mt-2'disabled={this.state.optionSelected===''}> Submit</button>
                              </form>
                     </div>
                   </div>
                 </div>
            </div>
}
    </div>
        )
    }
}

const mapStateToProps =({authedUser,users,questions})=>{
    return{
        authedUser,
        users,
        questions,
        
    }
}

export default connect(mapStateToProps)(DetailPage)