import React, { createContext, useState} from 'react'
import { PRODUCTS } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[i + 1] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getSubtotal = () => {
    let amount = 0
    for (let i = 0; i < PRODUCTS.length; i++) {
      amount += PRODUCTS[i].price * cartItems[i + 1]
    }
    return amount
  }
  const addToCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1 }))
  }
  const manualCountUpdate = (newAmount, itemId) => {
    setCartItems(prev => ({...prev, [itemId]: newAmount}))
  }
  const removeAll = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]: 0 }))
  }
  const contextValue = { cartItems, addToCart, removeFromCart, manualCountUpdate, getSubtotal, removeAll}

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
