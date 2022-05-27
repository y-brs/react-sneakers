function App() {
  return (
    <div className="wrapper">
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
          <div className="search-block">
            search
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
