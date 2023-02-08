import s from './todoFooter.module.css';

export default function TodoFooter({todos,setTodos,onClearChecked}){
    
  const checkedClear = todos.filter((todo)=>todo.isCompleted).length;
  return(
    <div className={s.footer}>
      <div className={s.footerCheck}>{checkedClear}/{todos.length}</div>
      <button className={s.footerButton} onClick={()=>{
        onClearChecked();
      }}>Clear checked</button>
    </div>
  );
}