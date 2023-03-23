import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete, handleEdit } from '../redux/actions'
import EditTodo from './EditTodo'
import {MdDelete} from "react-icons/md"
import {GrCompliance} from "react-icons/gr"

const TodoCard = ({card}) => {

  const dispatch = useDispatch()
  
  return (
    <div style={{display:"flex"}}>
        <h1  className={card.isDone?"title-line":"title-normal"} >{card.action}</h1>
          
        <button onClick={()=> dispatch(handleDelete(card.id))} className="btn-Del" ><MdDelete/></button>
        <button  onClick={()=> { dispatch(handleComplete(card.id))}} className="btn-Com" ><GrCompliance/></button>
        <EditTodo handleEdit={handleEdit} card={card} />
    </div>
  )
}

export default TodoCard