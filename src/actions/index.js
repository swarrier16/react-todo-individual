const addTask =(task)=>{
    return {
        type: 'ADD_TASK',
        payload: task
    };
},
deleteTask =(taskId) =>{
    return{
        type:'DELETE_TASK',
        payload: taskId
    };
},

editTask =(task) =>{
    return{
        type:'EDIT_TASK',
        payload: task
    };
},
    completeTask =(taskId) =>{
        return{
            type:'COMPLETE_TASK',
            payload: taskId
        };
};
export {addTask, deleteTask, editTask, completeTask};
