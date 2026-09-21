// import React from 'react'
// import { useState } from 'react'

// export default function ToDO() {

//   const [todos, setTodos] = useState([])
//   const [input, setInput] = useState("")

//   function addTodo(){
//     if(input.trim()=="") return 
//     let temp = [...todos]
//     let id = Math.floor(Math.random()*1000000)
//     temp.push({id : id , name : input.trim(), completed : false})
//     setTodos(temp)
//     setInput("")
//   }

//   function deleteTodo(id){
//     let temp = todos.filter((todo)=>todo.id != id);
//     setTodos(temp)
//   }
    
//   function handleCheck(e, id){
//     let temp = todos.map((todo)=>{
//       if(todo.id == id){
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     })

//     setTodos(temp)
//   }

//   return (
//     <div>
//       <center><h2 className='text-3xl '>TO DO App</h2></center><br />

//       <div className='flex justify-center items-center'>
//         <input type="text" className='h-16 border  w-120 rounded-xl px-4' onChange={(e)=>setInput(e.target.value)} value={input} placeholder='add Todos..'/>
//         <button onClick={()=>addTodo()} className=' border  h-16 w-24 rounded-lg mx-10 bg-black text-white  text-semibold text-2xl cursor-pointer'>Add</button>
//       </div>

//       <div className=''>
//         <h3 className="text-3xl "> -- List --  </h3>
//         {
//           todos.map((todo)=> <div  key={todo.id} className='border h-12 my-2 hover:outline-2 rounded-lg w-120 px-12 flex justify-between  items-center  gap-2'>
//               <input type="checkbox" name="" id="" className='border h-8  ' checked={todo.completed} onChange = {(e)=>{handleCheck(e,todo.id)}}/>

//               <span className={`text-xl ${todo.completed ? "line-through" : ""}`}>{todo.name}</span>

//               <button className='' onClick={()=>deleteTodo(todo.id)}><img  className='h-6'  src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="" /></button>
//           </div>)
//         }
//       </div>

//     </div>
//   )
// }





// # bugs 
// - deleteTodo function (todos in place of temp)
// - checkbox input todo in place of todo.id
// - addTodo (   if(input.trim() !="") return    )
// - useState is not imported 
// handle check ->    todo.completed = todo.completed;  here ! is missing 




import React from 'react'
export default function ToDO() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo(){
    if(input.trim() !="") return 
    let temp = [...todos]
    let id = Math.floor(Math.random()*1000000)
    temp.push({id : id , name : input.trim(), completed : false})
    setTodos(temp)
    setInput("")
  }

  function deleteTodo(id){
    let temp = todos.filter((todo)=>todo.id != id);
    setTodos(todos)
  }
    
  function handleCheck(e, id){
    let temp = todos.map((todo)=>{
      if(todo.id == id){
        todo.completed = todo.completed;
      }
      return todo;
    })

    setTodos(temp)
  }

  return (
    <div>
      <center><h2 className='text-3xl '>TO DO App</h2></center><br />

      <div className='flex justify-center items-center'>
        <input type="text" className='h-16 border  w-120 rounded-xl px-4' onChange={(e)=>setInput(e.target.value)} value={input} placeholder='add Todos..'/>
        <button onClick={()=>addTodo()} className=' border  h-16 w-24 rounded-lg mx-10 bg-black text-white  text-semibold text-2xl cursor-pointer'>Add</button>
      </div>

      <div className=''>
        <h3 className="text-3xl "> -- List --  </h3>
        {
          todos.map((todo)=> <div  key={todo.id} className='border h-12 my-2 hover:outline-2 rounded-lg w-120 px-12 flex justify-between  items-center  gap-2'>
              <input type="checkbox" name="" id="" className='border h-8  ' checked={todo.completed} onChange = {(e)=>{handleCheck(e,todo)}}/>

              <span className={`text-xl ${todo.completed ? "line-through" : ""}`}>{todo.name}</span>

              <button className='' onClick={()=>deleteTodo(todo.id)}><img  className='h-6'  src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="" /></button>
          </div>)
        }
      </div>

    </div>
  )
}



