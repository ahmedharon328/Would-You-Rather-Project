import React,{ Component } from 'react';
import {connect} from 'react-redux'
import getAlldata from './actions/shared';
import LogIn from './component/logIn';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import NavBar from './component/Nav';
import FormCreator from './component/formQuestion';
import Leaderboard from './component/leaderboard';
import Page from './component/page404';
import UnAnswered from './component/AnsweredAndUnAnswered' 
import  LoadingBar  from 'react-redux-loading';
import DetailPage from './component/DetailPage';
class App extends Component{
  componentDidMount(){
    this.props.dispatch(getAlldata())
  }
  render(){
    console.log(this.props)
    return (
      <Router>
        <LoadingBar />
      <div>
        <NavBar/>
        {this.props.authedUser === null ? <LogIn /> :
        <Switch>
        <Route path='/' exact component={UnAnswered } />
        <Route path='/create' component={FormCreator} />
        <Route path='/leaderboard'  component={Leaderboard}/>
        <Route path="/answered/:id" component={DetailPage} />
        <Route path='/unanswered/:id' component={DetailPage} />
        <Route path='/notfound' component={Page} />
        <Route path='*' component={Page} />
      </Switch> 
      }
         
        
      </div>
      </Router>
    )
  }
}

const mapStateToProps=({authedUser})=>{
  return{
    authedUser
  }
}
export default connect(mapStateToProps) (App);
