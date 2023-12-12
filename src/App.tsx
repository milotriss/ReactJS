import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import ListTodo from "./components/listTodo/listTodo";

export interface Todo {
  id:number
  content:string
  status:boolean
}

function App() {

  const [todo, setTodo] = useState<Todo[]>([])

  let addNewTodo = (todo:Todo):void =>{
    setTodo((prev:Todo[]) => [...prev,todo])
  };
  let deleteTodo = (id:number):void =>{
    let newTodo:Todo[] = todo.filter(t => t.id !== id)
    setTodo(newTodo)
  }
  let updateTodo = (newTodo:Todo,id:number):void =>{
    let newData:Todo[] = todo.map((todo:Todo) => {
      if (todo.id === id) {
        return newTodo
      }
      return todo
    })
    setTodo(newData)
  }

  let deleteAll = ():void =>{
    setTodo([]);
  }
  return (
    <div className="App">
      <Header addNewTodo={addNewTodo} />
      <ListTodo 
      todo={todo} 
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
      deleteAll={deleteAll}
      />
    </div>

  );
}

export default App;
