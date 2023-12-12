import { ChangeEvent, useRef, useState } from 'react'
import './header.css'
import { Todo } from '../../App'


interface Props {
  addNewTodo:Function
}

const Header = (props:Props):JSX.Element => {

  let [content, setContent] = useState<string>('')

  let inputRef:any = useRef()

  let handleAddTodo = () => {
    let newTodo:Todo = {
      id: Math.random() * 100,
      content: content,
      status: false
    }
    props.addNewTodo(newTodo)
    setContent('')
    inputRef.current.focus()
  }

  return (
    <header>
        <h1 className='titleHeader'>Todolist</h1>
        <div className="addTodo">
            <input
            ref={inputRef}
            value={content}
            autoFocus 
            placeholder='Enter your task' 
            className='inputTodo' 
            type="text" 
            onChange={(event: ChangeEvent<HTMLInputElement>) => 
              setContent(event.target.value)}
            />
            <button onClick={handleAddTodo} className='btnTodo'>Add+</button>
        </div>
    </header>
  )
}

export default Header