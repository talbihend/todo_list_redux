import { ADD_TASK, COMPLET_TASK, DELETE_Task, EDIT_TASK, FILTER_TASK } from "./actionTypes";

const init ={
    todoTab: [],
};


export const reducer = (state = init, {type,payload}) => {
    switch (type) {

        case ADD_TASK :
            return {
                ...state,
                todoTab: [...state.todoTab, payload],
            };
        
        case DELETE_Task :
            return {
                ...state, todoTab: state.todoTab.filter(el=>el.id!==payload)
            };

        case COMPLET_TASK :
            return {
                ...state, todoTab:state.todoTab.map(el=>el.id==payload?{...el,isDone:!el.isDone}:el)

            };
        case EDIT_TASK :
            return {
                ...state, todoTab:state.todoTab.map(el=>el.id===payload.id?payload:el)

            };
        case FILTER_TASK :
            return{
                ...state, todoTab: state.todoTab.filter(el=>el.isDone===false)
            }
             
            default:
                return state;

        }
        
    }
