import React , { Component} from "react";
import { NavLink} from 'react-router-dom'
import { connect} from 'react-redux'
import {logOut} from '../actions/authedUser'
// import { Redirect } from "react-router";
class NavBar extends Component{
    handleClick=(e)=>{
        e.preventDefault()
        this.props.dispatch(logOut(e));
    }

    render(){
        // console.log(this.props)
        const { users, authedUser } = this.props;
        // if(authedUser === null ){
        //     return <Redirect to='/'/>
        // }
        return(
            <nav className='navbar navbar-expand-sm navbar-light '>
                <div className='container-sm'>
                    <div className='navbar-brand unlisted-style'>
                        {authedUser === null ? <span className='fw-bold text-secondary'>
                            Would You Rather
                        </span> : (
                            <div className='imgaes'>
                                <img src={users[authedUser].avatarURL} alt={users[authedUser].name} width='10%' className='navPage' />
                            <p className='fw-bold text-black m-0'>
                                You Have Signed In <br/> As <span className='text-danger'>{users[authedUser].name}</span>
                            </p>
                            </div>
                        )}
                        
                    </div>
                    {/*  Nav Link  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* {navbar-link} */}

                    <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to='/' activeClassName='active' className='nav-link'>Home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/create' activeClassName='active' className='nav-link'>New Question </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/LeaderBoard' activeClassName='active' className='nav-link'>LeaderBoard </NavLink>
                            </li>
                            { authedUser === null ? null : (
                            <div>  
                                <li className='nav-item'>
                                    <button type='button' className='btn btn-primary ms-2' onClick={this.handleClick}>Log Out</button>     
                                </li>
                            </div>

                            )}
                        </ul>
                    </div>
                </div>
            </nav>
          )
    }
}
const mapStateToProps= ({authedUser,users}) =>{
    return {
        authedUser,
        users
    }
}



export default connect(mapStateToProps)(NavBar)