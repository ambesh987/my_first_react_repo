import React from 'react'

const Wishlisht=()=> {
    const [query,setQuery]=React.useState("");
    const [tasks,setTasks]=React.useState([]);
    const handleChange=(event)=>{
        const {value}=event.target;
        setQuery(value);

    }
    const addFav=()=>{
        const payLoad={
            todo:query,
            status:false,
        };
        let updatedTasks=[...tasks,payLoad];
        setTasks(updatedTasks);

    }
    
  return (
      <>
    <h1>Wishlisht</h1>
    {/* <div>{query}</div> */}
    <input placeholder='Enter your Fav...'  onChange={handleChange} value={query}/>
    <button onClick={addFav}>ADD</button>
    {
        tasks.map(({todo,status})=><div>{todo}</div>)
        
    }
    </>
  )
}

export { Wishlisht}