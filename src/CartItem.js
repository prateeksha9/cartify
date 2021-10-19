import React from "react";

const CartItem = (props) => {

                                    // increaseQuantity = () => {
                                    //     // set state form 1
                                    //         // this.setState({
                                    //         //     qty : this.state.qty + 1,
                                    //         // });
                                    //     // set state form 2
                                    //     this.setState((prevState) => {
                                    //         return{
                                    //             qty: prevState.qty+1
                                    //         }
                                    //     }, () => {
                                    //         console.log('this.state', this.state);
                                    //     });
                                    // }

                                    // decreaseQuantity = () => {
                                    //     this.setState((prevState) => {
                                    //         const {qty} = this.state;
                                    //         if(qty !== 0){
                                    //             return{
                                    //                 qty: prevState.qty-1
                                    //             }
                                    //         } else{
                                    //             alert("Quantity cannot be decreased further.")
                                    //         } 
                                    //     }, () => {
                                    //         console.log('this.state', this.state);
                                    //     });
                                    // }

        // object destructuring
        const {price, title, qty} = props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    {/* <img></imaqg> */}
                    <img alt="" style={styles.image} src ={product.img} />
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Quantity: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="actions-icon" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={() => onIncreaseQuantity(product)}
                        />

                        <img 
                            alt="decrease" 
                            className="actions-icon" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            // onClick={this.decreaseQuantity}
                            onClick={() => onDecreaseQuantity(product)}
                        />
            
                        <img 
                        alt="delete" 
                        className="actions-icon" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                    </div>

                </div>

            </div>
        );
    }

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background :'#ccc',
    }
}
export default CartItem;