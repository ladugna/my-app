import '../index.css'


const Product=(props)=>{

    return(
        // <div>Product</div>
     <div className='Content'>
         <h2>Name:{props.name}</h2>
         <h2>Price:{props.price}</h2>
     </div>
    );

}
export default Product;