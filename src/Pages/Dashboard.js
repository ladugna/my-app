
import Products from "../Components/Products";
import {useEffect, useState} from 'react'
import NewProductHooks from "../Components/NewProduct/NewProductHooks"


const Dashboard = (props)=>{

const [count, setCount] =useState(0);
const [flag,setFlag]=useState(false)
const countHandler=()=>{
    setCount(count+1);
}

const flagHandler=()=>{
  setFlag(!flag)
}
 useEffect(()=>{},[flag])

 return (

    <div>
        <h1>In Dashboard</h1>
    <Products/>
    {/* <NewProduct/> */}
    <NewProductHooks clicking={flagHandler}/> 
  <label>{count}</label>
    <button onClick={countHandler}>Update</button>
    </div>
   
 );
}
export default Dashboard;