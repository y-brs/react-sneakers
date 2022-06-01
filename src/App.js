import { useState, useEffect, createContext } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Orders from "./pages/Orders"

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
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get(`${BASE_URL}/cart`),
          axios.get(`${BASE_URL}/favorites`),
          axios.get(`${BASE_URL}/items`)
        ])

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        console.log("Error with request data!")
      }
    }

    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));

      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`${BASE_URL}/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])

        const { data } = await axios.post(`${BASE_URL}/cart`, obj)
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        )
      }
    } catch (error) {
      console.log("Error with request data!")
    }
  }

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
      await axios.delete(`${BASE_URL}/cart/${id}`)
    } catch (error) {
      console.log("Failed to remove cart!")
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems
      }}>
      <div className="wrapper">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="" exact element=
            {
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/favorites" exact element={<Favorites />} />

          <Route path="/orders" exact element={<Orders />} />
        </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
