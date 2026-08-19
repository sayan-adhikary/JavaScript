import React, { useContext, useState } from 'react'
import ProductContext from '../contexts/product/ProductContext.js'
import CartContext from '../contexts/cart/CartContext.js';

function Product() {
    // submit the form => product list
    const {productList, setProductList} = useContext(ProductContext);
    const {cart, setCart} = useContext(CartContext);
    const [productName, setProductName] = useState("");
    const [initial, setInitial] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const newProduct = {
            id: Date.now(), // key
            name : productName
        }

        setProductName(initial);

        setProductList([...productList, newProduct]);
    }

    function addToCart(e){
        const key = e.target.parentElement.id;

        let flag = false;
        for(let x of cart){
            // console.log(x.name, x.id, key);
            if(x.id == key){
                flag = true;
            }
        }
        // console.log("flag",flag)

        if(flag == false){
            for(let x of productList){
                if(x.id == key){
                    setCart([...cart, {...x}]);
                }
            }
        }
        // console.log(cart);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={productName} placeholder='product name...' onChange={(e)=>setProductName(e.target.value)} />
            <button>add</button>
        </form>

        <div>
            {productList.map((product, index)=>{
                return (
                    <div key={product.id} id={product.id}
                    style={{
                        display: "flex",
                        justifyContent : "center",
                        gap: "1rem"
                    }}>
                        <span>{index}</span>
                        <span>{product.name}</span>
                        <button onClick={addToCart}>Add-To-Cart</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Product