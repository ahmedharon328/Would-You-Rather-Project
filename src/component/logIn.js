import React ,{Component} from "react";
import { connect } from 'react-redux'
// import { Redirect } from "react-router-dom";

import { authUser } from "../actions/authedUser";



class LogIn extends Component{
    state={
        user:''
    }
 
    handleChange=(e)=>{
        this.setState({user:e.target.value})
        
    }

    hadnleSumbit=(e)=>{
        e.preventDefault()
        const {user}=this.state
        const { dispatch} = this.props 
        if(user !== ''){
            dispatch(authUser(user))
        }
        
    }
    render(){
        // console.log(this.props) 
        const {users } = this.props
        return(
            
            <div className='container md'>
                <form onSubmit={this.hadnleSumbit} >
                <h2 className='text-center text-primary mb-3'>Login To Continue...</h2>

                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor="inputGroupSelect01">Select A User</label>
                    <select className='form-select'id='inputGroupSelect01' onChange={this.handleChange}  >
                        {Object.keys(users).map(id =>(
                            <option key={id} value={id}>{users[id].name}</option>
                        ))}
                    </select>
                </div> 
                     <button className='btn btn-primary mt-1'disabled={this.state.user === ''} > LogIn</button>
                </form>
            </div>
        )
    }
}



const mapStateToProps = ({users})=>{
    return {
        users
    }
}



export default connect (mapStateToProps)(LogIn)