import { Fragment, useEffect, useState } from "react";
//rafce -----for short cut

export default function Form(){

    const[newItem, setNewItem]= useState("hhdfbfdbh")
    const [todos,setTodos]=useState(()=>{
        const localValue= localStorage.getItem("ITEMS")
        if(localValue==null) return []
        return JSON.parse(localValue)
    })


    function handleSubmit(e){
        e.preventDefault();

        setTodos(currentTodos=>{ return [...currentTodos, {id:crypto.randomUUID(), title:newItem, completed:false},]})
       // setTodos(currentTodos=>{ return [...currentTodos, {id:crypto.randomUUID(), title:newItem, completed:false},]})
        // setTodos([...todos, {id:crypto.randomUUID(), title:newItem, completed:false},])
        setNewItem("")
    }

    function toggleTodo(id, completed){
        setTodos(currentTodo=>{
            return currentTodo.map(todo=>{
                if(todo.id===id){
                    return {...todo, completed}
                }
                return todo
            })
        })
    }
    function deleteTodo(id){
        setTodos(currentTodo=>{
            return currentTodo.filter(todo=>todo.id!==id)
        })
    }
    useEffect(()=>{
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

  console.log(todos)
    return (
        <>
        <form onSubmit={handleSubmit}
         className="new-item-form">
        <div className="form-row">
                <label htmlFor="item">   New Item </label>
                <input value={newItem}
                onChange={e=>setNewItem(e.target.value)}
                 type="text" id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
        <h1 className="header"> To do list </h1>
        <ul className="list">
            {todos.length===0 && "No Todo yet..."}

            {todos.map(todo=>{
                return (
                     <li key={todo.key}>
                    <label>
                        <input type="checkbox" checked={todo.completed}
                        onChange={e=>toggleTodo(todo.id, e.target.checked)}/>
                        {todo.title}
                    </label>
                    <button onClick={()=> deleteTodo(todo.id)}
                    className="btn btn-danger">Delete</button>
                    
                </li>

                );
            })}
           
        </ul>
        {/* This is a bootstrap */}
        <ul class="list-group"> 
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
</ul>
        </>
    );
}