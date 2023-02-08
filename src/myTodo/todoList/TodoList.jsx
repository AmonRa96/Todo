import s from './todoList.module.css';

export default function TodoList({todos,onDelete,onChange}){
  return(
    <div className={s.TodoList}>
      { todos.map((todo)=>{
        return(
          <div key={todo.id} className={s.listItems}>
            <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{onChange({
              ...todo,
              isCompleted:e.target.checked
            });}} />
            <div className={s.listText}>{todo.text}</div>
            <button className={s.listButton} onClick={()=>{
              onDelete(todo.id);
            }}>x</button>
          </div>
        );
      })}
    </div>
  );
}