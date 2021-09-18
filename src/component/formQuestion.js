import React ,{Component} from "react";
import { connect } from "react-redux";
import { saveQuestion } from "../actions/shared";


class FormCreator extends Component{
    state = {
        optionOne:'',
        optionTwo:''
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSumbit=(e)=>{
        e.preventDefault()
        const {optionOne ,optionTwo}=this.state
        const {dispatch}=this.props
        dispatch(saveQuestion(optionOne,optionTwo))
        this.props.history.push('/')
        this.setState({
            optionOne:'',
            optionTwo:''
        })
    }

    render(){
        const {optionOne ,optionTwo} = this.state
        // console.log(this.props)
        return(
            <div className='container-lg my-5'>
                <div className='text-center'>
                    <h2 className='lead fw-bold'>How About A New Question</h2>
                </div>
                <div className='row justify-content-center my-5'>
                    <div className='col-lg-6'>
                <form onSubmit={this.handleSumbit}>
                    <div className='mb-3'>
                        <label htmlFor="optionOne" className='form-label'>Option 1</label>
                        <input type="text" id="optionOne" value={optionOne} className='form-control' onChange={this.handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="optionTwo" className='form-label'>Option 2</label>
                        <input type="text" id="optionTwo"  valiue={optionTwo} className='form-control' onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={optionOne === '' || optionTwo===''}>Submit</button>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default connect()( FormCreator)