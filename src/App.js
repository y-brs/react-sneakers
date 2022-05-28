import { useState, useEffect } from "react"

import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState()
  const [cartOpened, setCartOpened] = useState(false)

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
        />
      }

      <Header
        onClickCart={() => setCartOpened(true)}
      />

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
