import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/';

class TaskBar extends React.Component{

    // validateInput(task) {
    //     if (!task) {
    //         return "Enter a Task";
    //     }
    //     else if (_.find(this.props.todos, todo => todo.task === task)) { //searches todos in form <CreateTodo> app.js
    //         return "Duplicate Task";
    //     }
    //     else {
    //         return null; //return null, or no error
    //     }
    // }

    render(){
        return (
            <div>
                <input type ="text" ref="task" placeholder="add your tasks here" />
                <button onClick={()=>this.props.dispatch(addTask(this.refs.task.value))}>Add Task</button>
            </div>
        );
    }


}



function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch);

}
export default connect(()=>{},)(TaskBar);