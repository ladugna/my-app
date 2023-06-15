import axios from "axios";
import { useState , useRef, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import './NewProduct.css';

const NewProductHook = (props) => {


    const newProductForm = useRef();
    
    const [price, setPrice] = useLocalStorage('price','0')
    const [name, setName] = useLocalStorage('name',null)
    const [flag,setFlag]=useState(false)

    const ProductHandler = () =>{
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            price: form['price'].value
        };
        console.log(data);
        axios.post('http://localhost:8080/products', data)
        .then(data => {
            console.log('Success', data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
        // setName("")
        // setPrice("")
    }

    useEffect(  ()=> {
        newProductForm.current['name'].value= "";
        newProductForm.current['price'].value=""
        props.clicking()
    } , []);
    const flagHandler=()=>{
        setFlag(!flag)
      }
   

    return (
        <div className="NewProduct">
            With Ref
         <form ref={newProductForm}>
                <h1>Add a Product</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                    onChange={e => setName(e.target.value)}
                />

                <label>Price</label>
                <input  type="text"
                    label={'price'}
                    name={'price'}
                    onChange={e => setPrice(e.target.value)}
                />
                </form>
                <button onClick={ProductHandler}>Add Product </button>
        </div>
    );

}

export default NewProductHook;