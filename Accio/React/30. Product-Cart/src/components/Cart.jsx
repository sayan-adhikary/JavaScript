import React, { useContext } from 'react'
import CartContext from '../contexts/cart/CartContext.js'

function Cart() {
    const {cart} = useContext(CartContext);
    const totalCartElements = cart.length;
  return (
    <div>
        <div>
            {cart.map((product, index)=>{
                return (
                    <div key={product.id} id={product.id}
                    style={{
                        display: "flex",
                        justifyContent : "center",
                        gap: "1rem"
                    }}>
                        <span>{index}</span>
                        <span>{product.name}</span>
                    </div>
                )
            })}
        </div>
        <div>
            <h2>Total Product Selected : {totalCartElements}</h2>
        </div>
    </div>
  )
}

export default Cart