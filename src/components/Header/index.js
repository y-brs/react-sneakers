import s from "./Header.module.scss"

function Header() {
  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <img src="/images/logo.svg" width={40} height={40} alt="React Sneakers Shop" />

        <div className={s.headerInfo}>
          <h3>React Sheakers</h3>
          <p>Best sneakers shop</p>
        </div>
      </div>
      <div className={s.headerRight}>
        <ul>
          <li>
            <a href="/">
              <img className={s.imgCart} src="/images/ico-cart.svg" width={20} height={20} alt="Cart" />
              <span>$200</span>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/ico-favorite.svg" width={20} height={20} alt="Cart" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/ico-profile.svg" width={20} height={20} alt="Cart" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
