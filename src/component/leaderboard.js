import React , { Component} from "react";
import { connect } from "react-redux";
import Board from "./Board";

class LeaderBoard extends Component{
    render(){
        // console.log(this.props)
        const {userID} = this.props
        return(
            <div className='container md'>
                {userID.map((id)=>(
                    <div key={id}>
                    <Board id={id} />
                    </div>
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = ({users})=>{
    return{
       userID: Object.keys(users)
       .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length) 
       -       
       (Object.keys(users[a].answers).length + users[a].questions.length)))
    }
}
export default connect(mapStateToProps)(LeaderBoard)