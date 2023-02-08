import './App.css';
import {  useState } from 'react';
import AddTodo from './myTodo/addTodo/AddTodo.jsx';
import TodoList from './myTodo/todoList/TodoList.jsx';
import TodoFooter from './myTodo/todoFooter/TodoFooter.jsx';

const TODOS_DEFAULT = [
  {
    id: Math.random(),
    text: 'HTML',
    isCompleted: false
  },
  {
    id: Math.random(),
    text: 'CSS',
    isCompleted: false
  },
  {
    id: Math.random(),
    text: 'JAVASCRIPT',
    isCompleted: false
  }, 
  {
    id: Math.random(),
    text: 'REACT',
    isCompleted: false
  }
];

export default function App() {
  const[value,setValue] = useState('');
  const[todos,setTodos] = useState(TODOS_DEFAULT);

  function onAdd(newText){
    setTodos(([
      ...todos,
      {
        id: Math.random(),
        text: newText,
        isCompleted: false
      }
    ]));
    setValue('');
  }

  function onDelete(id){
    setTodos(todos.filter(todo=>todo.id !==id));
  }

  function onChange(newTodo){
    setTodos(todos.map((todo)=>{
      if(todo.id === newTodo.id){
        return newTodo;
      } return todo;
    }));
  }

  function onInputChange(e){
    setValue(e.target.value);   
  }

  function onClearChecked(){
    setTodos(todos.filter(todo=>!todo.isCompleted));
  }
 
  return (
    <div className="todoList">
      <h1>Todo list</h1>
      <AddTodo value={value} onInputChange={onInputChange} onAdd={onAdd}/>
      <TodoList todos={todos} setTodos={setTodos} onDelete={onDelete} onChange={onChange}/>
      <TodoFooter todos={todos} setTodos={setTodos} onClearChecked={onClearChecked}/>
    </div>
  );
}