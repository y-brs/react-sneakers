import { useContext } from "react"
import Card from "../components/Card"

import { AppContext } from "../App"

function Favorites() {
  const {favorites, onFavorites, onAddToCart} = useContext(AppContext)

  return (
    <>
      <main className="main">
        <div className="section">
          <h1>My favorites</h1>
        </div>

        <div className="card-list">
          {favorites.map((item) =>
            <Card
              key={item.id}
              onClickFavorite={onFavorites}
              onClickAdd={onAddToCart}
              favorited={true}
              {...item}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default Favorites
