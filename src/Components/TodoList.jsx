import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = () => {
    const {todoTab} = useSelector(state=>state)
  return (
    <div>
        {
            React.Children.toArray(todoTab.map(el=><TodoCard card={el}/>))
        }
        {
            // React.Children.toArray(todoTab.filter(el=>el.isDone===false))
        }
    </div>
  )
}

export default TodoList