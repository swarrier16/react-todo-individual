import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editTask} from "../actions";

class EditTask extends React.Component{

    render(){
        return(
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={()=>this.props.dispatch(editTask(this.refs.props.value))}>Edit Task</button>
                </td>
            </tr>
        )

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({editTask}, dispatch);

}
export default connect(()=>{},)(EditTask);