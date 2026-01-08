import React, { useState } from "react"

let uid=1;
function Array(){

    const [todoName,setTodoname]=useState("");
    const [todoList,setTodolist]=useState([]);

    const handleAdd=()=>{
    //     let prev=[...todoList];
    //     prev.push({
    //         id: ++uid,
    //         name: todoName 
    //     });
    //   setTodolist(prev);
      setTodolist([...todoList,{id:++uid, name:todoName}]);
      setTodoname("")
        }
        
    
        console.log(todoList);
        //  setTodolist("");
        const handleDelete=(i,id)=>{
           
            setTodolist(todoList.filter((num)=>num.id!==id))
        }
    return(
    
    <>
    <input type="text" value={todoName} onChange={(e)=>setTodoname(e.target.value)} autoFocus={false}/>
    <button type="button" onClick={handleAdd}>Add</button>

    <br/>
    <br/>
     
        <ul>
            {todoList.map((value,i)=>
            {return(
                
               <React.Fragment key={i}>
               <li >{value.name}</li>
               <button type="button" onClick={()=>{handleDelete(i,value.id)}}>delete</button>
               </React.Fragment>
            )
            
            })}
     
        </ul>
     
    
    </>);




}
export default Array;