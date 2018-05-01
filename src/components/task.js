import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask, editTask, completeTask} from "../actions";


class Task extends React.Component{

    state = {
        color : 'red'
    };

    onClickButton = () => {
        this.setState({
            color: 'green'
        });
    };


    render(){

        return(
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={()=>{this.editTask.bind(this)}}>Edit</button>
                    <button onClick={this.onClickButton} style={{backgroundColor:this.state.color}}>Mark Complete</button>
                    <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
                </td>
            </tr>
        )

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask, editTask}, dispatch);
}

export default connect(()=>{return{};}, mapDispatchToProps)(Task);