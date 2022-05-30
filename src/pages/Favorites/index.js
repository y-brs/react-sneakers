import { useContext } from "react"
import Card from "../../components/Card"

import { AppContext } from "../../App"

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext)

  return (
    <>
      <main className="main">
        <div className="section">
          <h1>My favorites</h1>
        </div>

        <div className="card-list">
          {favorites.map((item, index) =>
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          )}
        </div>
      </main>
    </>
  )
}

export default Favorites
