import Card from "../../components/Card"

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ))
  }

return (
  <>
    <main className="main">
      <div className="section">
        <h1>{searchValue ? `Search for: ${searchValue}` : "All Sneakers"}</h1>

        <div className="search-block">
          <img src="/images/ico-search.svg" alt="Search" />

          {searchValue &&
            <img
              onClick={() => setSearchValue("")}
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
        {renderItems()}
      </div>
    </main>
  </>
)}

export default Home
