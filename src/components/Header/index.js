import { Link } from "react-router-dom"

import s from "./Header.module.scss"

function Header({ onClickCart }) {
  return (
    <header className={s.header}>
      <Link to="/">
        <div className={s.headerLeft}>
          <img src="/images/logo.svg" width={40} height={40} alt="React Sneakers Shop" />

          <div className={s.headerInfo}>
            <h3>React Sheakers</h3>
            <p>Best sneakers shop</p>
          </div>
        </div>
      </Link>

      <div className={s.headerRight}>
        <ul>
          <li onClick={onClickCart}>
            <img className={s.imgCart} src="/images/ico-cart.svg" width={20} height={20} alt="Cart" />
            <span>$200</span>
          </li>
          <li>
            <Link to="/favorites">
              <img src="/images/ico-favorite.svg" width={22} height={19} alt="Favorite" />
            </Link>
          </li>
          <li>
            <img src="/images/ico-profile.svg" width={20} height={20} alt="Profile" />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
