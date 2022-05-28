import { useState, useEffect } from "react"

import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

// const sneakers = require('./dummyData/sneakers.json'); // dummy data

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6292829b9d159855f08b926c.mockapi.io/items")
    .then(res => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  console.log(cartItems)

  return (
    <div className="wrapper">
      {cartOpened &&
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />
      }

      <Header
        onClickCart={() => setCartOpened(true)}
      />

      <main className="main">
        <div className="section">
          <h1>All Sneakers</h1>

          <div className="search-block">
            <img src="/images/ico-search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="card-list">
          {items.map((item) =>
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickFavorite={() => console.log('Favorite')}
              onClickAdd={onAddToCart}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
