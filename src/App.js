import Drawer from "./components/Drawers"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Card from "./components/Card"

const sneakers = require('./dummyData/sneakers.json');

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

      <Footer />
    </div>
  )
}

export default App
