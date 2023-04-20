import React, { useContext} from 'react'
import { ShopContext } from "../../context/shop-context" //test

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data
  const { cartItems, addToCart, removeFromCart, manualCountUpdate, removeAll } = useContext(ShopContext)
return (
  <div className="cartItem">
      <img src={productImage} alt="item"/>
      <div className="description">
          <h4>{productName}</h4>
          <p>${price}</p>
          <div className="itemHandler">
          <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={e => manualCountUpdate(+e.target.value, id)}/>
              <button onClick={() => addToCart(id)}> + </button>
          </div>
          <button className="removeAll" onClick={() => removeAll(id)}>Remove</button>
          </div>
      </div>
  </div>
)
}
