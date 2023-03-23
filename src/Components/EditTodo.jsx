import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AiTwotoneEdit} from "react-icons/ai"


const EditTodo = ({card, handleEdit}) => {
    const [show, setShow] = useState(false)

    const [actionn, setActionn] = useState(card.action)

    const dispatch = useDispatch();

    const handleSubmit=(e)=>{ setShow(false); e.preventDefault();  const NewCard={id:card.id, action:actionn, isDone:card.isDone}; dispatch(handleEdit(NewCard)); 
    }
    const handleShow = () => { setShow(!show ) };

  return (
    <div>

      <button onClick={handleShow} className="btn-edit" ><AiTwotoneEdit/></button>
      {show && (
        <>

       <form onSubmit={handleSubmit} >
            <input type="text" value={actionn}  onChange={e=>setActionn(e.target.value)} className="input-edit"  />
            <button type="submit" className="btn-submit">Add</button>
        </form>

        </>
       )}
    </div>
  )
}

export default EditTodo