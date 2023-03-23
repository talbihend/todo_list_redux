import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleAdd, handleFilter } from '../redux/actions';



const AddNewCard = () => {
    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch()
    const handleSubmit=(e)=> {
        e.preventDefault()
        const NewTaskAdded = {
            id: Math.random(),
            action: newTask ,
            isDone: false,
        };
        dispatch(handleAdd(NewTaskAdded))
    };

  return (

    <div >
      <button className="btn-add" onClick={handleFilter(State.id)}>Filter</button>
        <form onSubmit={handleSubmit} className="form-add" >
        <input type="text" value={newTask} onChange={ (e) => setNewTask(e.target.value)}  className="input-add" />
        <button className="btn-add" type="submit" >Add New Todo</button>
        
        </form>


    </div>
  )
}

export default AddNewCard