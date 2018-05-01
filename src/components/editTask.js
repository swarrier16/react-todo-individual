import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editTask} from '../actions/';

class EditTask extends React.Component{

    render(){
        return (
            <div>
                <input type ="text" ref="task" placeholder="add your tasks here" />
                <button onClick={()=>this.props.dispatch(editTask(this.refs.task.value))}>Add Task</button>
            </div>
        );
    }


}



function mapDispatchToProps(dispatch){
    return bindActionCreators({editTask}, dispatch);

}
export default connect(()=>{},)(EditTask);