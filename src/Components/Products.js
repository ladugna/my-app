import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";


const Products=(props)=>{

  console.log("it is loaded....")
  const [data, setData]=useState(
    [
        {id:11, name:"Iphone1", price:1600},
        {id:12, name:"Iphone2", price:1500},
        // {id:13, name:"Iphone3", price:1600}
    ]
  )



    const fetchdata=()=>{
        axios.get('http://localhost:8080/products')
        .then(response=>{
          setData(response.data)
        })
        .catch(error=>{
          console.log(error)
        })
      }



      //fetchdata();
      useEffect(()=>{fetchdata()},[])



    
    const products=data.map(p=>{
        return < Product key={p.id} id={p.id} name={p.name} price={p.price} />
    })

return products;
   
}
export default Products;