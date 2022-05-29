import { useState, useEffect } from "react"
import axios from "axios"

import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

const baseURL = "https://6292829b9d159855f08b926c.mockapi.io"

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios.get(`${baseURL}/items`).then((res) => {
      setItems(res.data)
    })

    axios.get(`${baseURL}/cart`).then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post(`${baseURL}/cart`, obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`${baseURL}/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const clearSearchInput = () => {
    setSearchValue("")
  }

  return (
    <div className="wrapper">
      {cartOpened &&
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      }

      <Header onClickCart={() => setCartOpened(true)} />

      <main className="main">
        <div className="section">
          <h1>{searchValue ? `Search for: ${searchValue}` : "All Sneakers"}</h1>

          <div className="search-block">
            <img src="/images/ico-search.svg" alt="Search" />

            {searchValue &&
              <img
                onClick={clearSearchInput}
                className="search-delete"
                src="/images/ico-delete.svg"
                alt="Clear"
              />
            }

            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="card-list">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) =>
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onClickFavorite={() => console.log('Favorite')}
                onClickAdd={onAddToCart}
              />
            )
          }
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
