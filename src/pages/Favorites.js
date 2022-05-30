import Card from "../components/Card"

export default function Favorites({ favorites, onFavorites, onAddToCart }) {
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
