import React , { Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Questions extends Component{
   
    render(){
        const {Userquestion , user} = this.props 
        const {avatarURL , name}= user
        const {optionOne , optionTwo} = Userquestion
         console.log(this.props)
        return(
            <div className='col-9 col-lg-5 justify-content-evenly'>
                     <div className='card border-1 border-primary'>
                     <img src={avatarURL} alt={name} className='card-img-top' width='50%'/>
                     <div className='card-body text-center py-4'>
                             <h4 className='card-title my-1'>{name}</h4>
                            <p className='lead-card-subitile'>
                              <strong>Asks</strong>  Would you rather <br/>
                              <span className='text-success fw-bold'> { optionOne.text} Or { optionTwo.text} </span> 
                            </p>
                     </div>
                     <Link to ={`/${this.props.route}/${this.props.id}`} className='text-center btn btn-outline-danger'> View Poll</Link>
                 </div>
                
            </div> 
        
         
   )
    }
}

const mapStateToProps=({users,questions},{id})=>{
    const Userquestion = questions ? questions[id] : null
    const user = Userquestion ? users[Userquestion.author]:null
    return{
        Userquestion,
        user,
        id
    }
}

export default connect(mapStateToProps)(Questions)