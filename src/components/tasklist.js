import React from 'react';
import {connect} from 'react-redux';
import Task from "./task";
import EditTask from "./editTask";

class TaskList extends React.Component{

    render(){
        return (
            <table>
                <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.tasks.map((task, index)=><Task key={index} task ={task} />)}
                </tbody>
            </table>
        );
    }

    onEditClick(){
        this.setState({ isEditing: true});
    }

    onCancelClick(){
        this.setState({ isEditing: false});
    }
}

function mapStateToProps(state) {
    return{
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(TaskList);