import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
   
        // const arr = [1,2,3,4];
        const {products} = props;
        return (
            <div className="cart">
                {/* {arr.map((item) => {
                    return item+2;
                })} */}
                {products.map((product) => {
                   return <CartItem 
                    product = {product} 
                    key="product.id"
                    onIncreaseQuantity = {props.onIncreaseQuantity} 
                    onDecreaseQuantity = {props.onDecreaseQuantity} 
                    onDeleteProduct = {props.onDeleteProduct}
                   />
                })}
            </div>
        );

    }



export default Cart;