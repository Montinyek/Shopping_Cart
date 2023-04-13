import "./App.css"
import { HashRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Shop } from "./pages/shop/shop"
import { Cart } from "./pages/cart/cart"
import { ShopContextProvider } from "./context/shop-context"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App

