import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">

      <div className="drawer-overlay" style={{ display: 'none' }}>
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between align-center">
            Cart
            <img src="/images/ico-remove.svg" width={32} height={32} alt="Close cart" />
          </h2>

          <div className="cart-list mb-30">
            <div className="cart-item d-flex align-center">
              <img className="cart-image mr-20" src="/images/sneakers/1.jpg" width={70} height={70} alt="" />

              <div className="mb-5">
                Mens Sneakers Nike Blazer Mid Suede
                <p className="mt-5"><b>$200</b></p>
              </div>

              <button className="remove ml-10">
                <img src="/images/ico-remove.svg" width={32} height={32} alt="Remove" />
              </button>
            </div>

            <div className="cart-item d-flex align-center">
              <img className="cart-image mr-20" src="/images/sneakers/1.jpg" width={70} height={70} alt="" />

              <div className="mb-5">
                Mens Sneakers Nike Blazer Mid Suede
                <p className="mt-5"><b>$200</b></p>
              </div>

              <button className="remove ml-10">
                <img src="/images/ico-remove.svg" width={32} height={32} alt="Remove" />
              </button>
            </div>
          </div>

          <ul className="total-block mb-30">
            <li>
              <span>Total:</span>
              <div></div>
              <b>$200</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>$10</b>
            </li>
          </ul>

          <button className="button-green">
            Place order
            <img src="/images/ico-arrow.svg" width={14} height={12} alt="Place order" />
          </button>

        </div>
      </div>

      <header className="header d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img src="/images/logo.svg" width={40} height={40} alt="React Sneakers Shop" />

          <div className="headerInfo ml-15">
            <h3>React Sheakers</h3>
            <p>Best sneakers shop</p>
          </div>
        </div>
        <div className="headerRight">
          <ul className="d-flex align-center clear">
            <li>
              <a href="/">
                <img className="mr-10" src="/images/ico-cart.svg" width={18} height={18} alt="Cart" />
                <span>$200</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/ico-favorite.svg" width={18} height={18} alt="Cart" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/ico-profile.svg" width={18} height={18} alt="Cart" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="main">
        <div className="d-flex justify-between align-center">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex align-center justify-center">
            <img src="/images/ico-search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="card-list mt-40">
          <div className="card">
            <div>
              <button className="favorite">
                <img src="/images/ico-unliked.png" width={32} height={32} alt="Like" />
              </button>

              <img src="/images/sneakers/1.jpg" alt="" className="card-image" />
            </div>
            <h5>Mens Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex align-center justify-between">
              <div className="d-flex align-center flex-column">
                <span>Price:</span>
                <p>$200</p>
              </div>
              <button className="buy">
                <img src="/images/ico-add.svg" width={32} height={32} alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
            <div>
              <button className="favorite">
                <img src="/images/ico-unliked.png" width={32} height={32} alt="Like" />
              </button>

              <img src="/images/sneakers/2.jpg" alt="" className="card-image" />
            </div>
            <h5>Mens Sneakers Nike Air Max 270</h5>
            <div className="d-flex align-center justify-between">
              <div className="d-flex align-center flex-column">
                <span>Price:</span>
                <p>$200</p>
              </div>
              <button className="buy">
                <img src="/images/ico-add.svg" width={32} height={32} alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
            <div>
              <button className="favorite">
                <img src="/images/ico-unliked.png" width={32} height={32} alt="Like" />
              </button>

              <img src="/images/sneakers/3.jpg" alt="" className="card-image" />
            </div>
            <h5>Mens Sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex align-center justify-between">
              <div className="d-flex align-center flex-column">
                <span>Price:</span>
                <p>$200</p>
              </div>
              <button className="buy">
                <img src="/images/ico-add.svg" width={32} height={32} alt="Add" />
              </button>
            </div>
          </div>

          <div className="card">
            <div>
              <button className="favorite">
                <img src="/images/ico-unliked.png" width={32} height={32} alt="Like" />
              </button>

              <img src="/images/sneakers/4.jpg" alt="" className="card-image" />
            </div>
            <h5>Mens Sneakers Puma X Aka Boku Future Rider</h5>
            <div className="d-flex align-center justify-between">
              <div className="d-flex align-center flex-column">
                <span>Price:</span>
                <p>$200</p>
              </div>
              <button className="buy">
                <img src="/images/ico-add.svg" width={32} height={32} alt="Add" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
