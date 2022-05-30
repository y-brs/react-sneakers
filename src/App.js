import { useState, useEffect, createContext } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

export const AppContext = createContext({})
export const BASE_URL = process.env.REACT_APP_URL

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      const cartResponse = await axios.get(`${BASE_URL}/cart`)
      const favoritesResponse = await axios.get(`${BASE_URL}/favorites`)
      const itemsResponse = await axios.get(`${BASE_URL}/items`)

      setIsLoading(false)
      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`${BASE_URL}/cart/${obj.id}`)
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post(`${BASE_URL}/cart`, obj)
      setCartItems((prev) => [...prev, obj])
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`${BASE_URL}/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onFavorites = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`${BASE_URL}/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(`${BASE_URL}/favorites`, obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      console.log("Failed to add to favorites!")
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const clearSearchInput = () => {
    setSearchValue("")
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.od) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onFavorites,
        onAddToCart,
        setCartOpened,
        setCartItems
      }}>
      <div className="wrapper">
        {cartOpened &&
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        }

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" exact element=
            {
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                clearSearchInput={clearSearchInput}
                onChangeSearchInput={onChangeSearchInput}
                onFavorites={onFavorites}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/favorites" exact element=
            {
              <Favorites />
            }
          />
        </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
