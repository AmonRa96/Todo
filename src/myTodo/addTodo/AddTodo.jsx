import s from './AddTodo.module.css';

export default function AddTodo({value,onInputChange,onAdd}){
  const handleSubmit = (e)=>e.preventDefault();
  
  return(
    <div className={s.addContainer}>
      <form  onSubmit={(e)=>{
        handleSubmit(e);
        onAdd(value);
       
      }} >       
        <input className={s.addContainerInput} type="text"  value={value} onChange={onInputChange}/>
        <button className={s.addContainerButton}>Add</button>
      </form>
    </div>
  );
}