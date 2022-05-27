import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Card from "./components/Card"

const sneakers = [
  {
    id: "1",
    title: "Mens Sneakers Nike Blazer Mid Suede",
    price: "169",
    imgUrl: "/images/sneakers/1.jpg"
  },
  {
    id: "2",
    title: "Mens Sneakers Nike Air Max 270",
    price: "219",
    imgUrl: "/images/sneakers/2.jpg"
  },
  {
    id: "3",
    title: "Puma X Aka Boku Future Rider",
    price: "179",
    imgUrl: "/images/sneakers/3.jpg"
  },
  {
    id: "4",
    title: "Mens Sneakers Under Armour Curry 8",
    price: "199",
    imgUrl: "/images/sneakers/4.jpg"
  },
  {
    id: "5",
    title: "Mens Sneakers Nike Blazer Mid Suede",
    price: "169",
    imgUrl: "/images/sneakers/5.jpg"
  },
  {
    id: "6",
    title: "Mens Sneakers Nike Air Max 270",
    price: "219",
    imgUrl: "/images/sneakers/6.jpg"
  },
  {
    id: "7",
    title: "Puma X Aka Boku Future Rider",
    price: "179",
    imgUrl: "/images/sneakers/7.jpg"
  },
  {
    id: "8",
    title: "Mens Sneakers Under Armour Curry 8",
    price: "199",
    imgUrl: "/images/sneakers/8.jpg"
  },
  {
    id: "9",
    title: "Mens Sneakers Nike Blazer Mid Suede",
    price: "169",
    imgUrl: "/images/sneakers/9.jpg"
  },
  {
    id: "10",
    title: "Mens Sneakers Nike Air Max 270",
    price: "219",
    imgUrl: "/images/sneakers/10.jpg"
  },
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <main className="main">
        <div className="section">
          <h1>All Sneakers</h1>

          <div className="search-block">
            <img src="/images/ico-search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="card-list">
          {sneakers.map((obj) =>
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
