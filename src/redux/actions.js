import { ADD_TASK, COMPLET_TASK, DELETE_Task, EDIT_TASK, FILTER_TASK } from "./actionTypes";

export const handleAdd = (AddNewTask) =>{
    return{

        type: ADD_TASK ,
        payload: AddNewTask,
    
    };

};
export const handleDelete = (DelCard) =>{
    return{

        type: DELETE_Task,
        payload: DelCard,
    
    };

};
export const handleComplete = (CompCard) =>{
    return{

        type:  COMPLET_TASK,
        payload: CompCard,
    
    };

};
export const handleEdit = (EditCard) =>{
    return{

        type:  EDIT_TASK,
        payload: EditCard,
    
    };
};
    export const handleFilter = (FilterCard) =>{
        return{
    
            type:  FILTER_TASK,
            payload: FilterCard,
        
        };

    

};