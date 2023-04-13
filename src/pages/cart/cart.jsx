import React, { useContext } from 'react'
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "./cart-item"
import { useNavigate } from "react-router-dom"
import "./cart.css"

export const Cart = () => {
  const { cartItems, getSubtotal } = useContext(ShopContext)
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, i) => {
          return cartItems[product.id] > 0 ? <CartItem key={i} data={product}/> : null
        })}
      </div>

      <div className="checkout">
        <p>Subtotal: ${getSubtotal()}</p>
        <div className="checkout-inner-flex">
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

