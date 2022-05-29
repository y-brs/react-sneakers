import Card from "../components/Card"

export default function Home({ searchValue,  clearSearchInput, onChangeSearchInput, items, onFavorites, onAddToCart }) {
  return (
    <>
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
                onClickFavorite={onFavorites}
                onClickAdd={onAddToCart}
                {...item}
              />
            )
          }
        </div>
      </main>
    </>
  )
}
