import React,{useState} from 'react'
import {useAuth} from '../../Context/AuthContext'
import Header from '../Header'
import Footer from '../Footer'

function Cart() {
    let {images,cartItems,removefromcart,cartEmpty} = useAuth()
    let [order,setOrder] = useState(false)
   let discount= 50;
   let price=cartItems.length*110

    let itemsinCart = cartItems.map(item=> <div className="union"><i class="fa fa-trash trash" onClick={()=>{removefromcart(item)}}></i><img src={item.url} className="itemincart"/></div> )
    
    function handleOrder()
    {
        cartEmpty()
        setOrder(true)
    }
    
    return (
        <>
        <Header />
        <div className="cartpage">
            <div className="cartitems">
                <div className="cartitems--header"><h4>My Cart({cartItems.length})</h4></div>
                {order && <h3 className="order-placed">Yahooo!! Order Placed</h3>}
                {itemsinCart}
            </div>
            <div className="price-details">
                <h4 className="price-details--header">Price Details</h4>
                <p>Price ({`${cartItems.length} items`})<span className="price">{`${cartItems.length > 0 ? price : 0} /-`}</span></p>
                <p>Discount <span className="price">{`${cartItems.length > 0 ? discount : 0} /-`}</span></p>
                <p>Delivery charges<span className="price">{cartItems.length > 0 ? "FREE" : "-"}</span></p>
                <h4 className="totalbill">Total Amount<span className="price">{`${cartItems.length > 0 ? price-discount : 0}/-`}</span></h4>
                {cartItems.length>0 ? <button className="order" onClick={handleOrder}>Place Order</button> : <h3 className="notify">Your Cart is Empty. Shop Now</h3>}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Cart
