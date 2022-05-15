import React,{useState} from 'react'

export default function ToDoForm(props) {
    const [input,  setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id : Math.floor(Math.random()*1000000),
            text:input,
            isComplete:false
        })
        setInput('')
    }
  return (<form className='todo-form'>
        <input type='text' placeholder='Add Task' onChange={handleChange} className='todo-inp' value={input} name='task'/>
        <button type='submit' onClick={handleSubmit} className="todo-btn">Add</button>
    </form>
    );
}
