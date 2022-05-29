import { useState, useEffect } from "react"
import axios from "axios"

import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"

const BASE_URL = process.env.REACT_APP_URL

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios.get(`${BASE_URL}/items`).then((res) => {
      setItems(res.data)
    })

    axios.get(`${BASE_URL}/cart`).then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post(`${BASE_URL}/cart`, obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`${BASE_URL}/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onFavorites = (obj) => {
    axios.post(`${BASE_URL}/favorites`, obj)
    setFavorites(prev => [...prev, obj])
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
                onClickFavorite={onFavorites}
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
