import React ,{Component} from "react";
import { connect } from "react-redux";
class Board extends Component{
    render(){
        // console.log(this.props)
        const {users,answers,questions}= this.props
        const {id,name,avatarURL} = users
        return(
            <div className='row my-5 align-items-center justify-content-center bg-light '>
                <div className='col-lg-3 col-md-6 col-sm-8  '>
                    <div className='card border-1 border-primary'>
                        <div className='card-body text-center py-4'>
                            <ul className='list-unstyled'>
                                <li key={id}>
                                    <img src={avatarURL} alt={name} className='rounded mx-auto d-block' width='50%'/>
                                    <h4 className='card-title my-1'>{name}</h4>
                                    <p className='lead-card-subitile'>
                                        Score: {answers.length + questions.length}
                                    </p>
                                    <p className='card-text mx-5 text-muted '>
                                        Answered: {answers.length}
                                    </p>
                                    <p className='card-text mx-5 text-muted '>
                                        Questions: {questions.length}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(({users},{id})=>{
    return{
        users:users[id],
        answers:Object.keys(users[id].answers),
        questions:Object.keys(users[id].questions)
    }
})

export default connect(mapStateToProps)(Board)