import s from "./Drawer.module.scss"

function Drawer() {
  return (
    <div className={s.overlay}>
      <div className={s.drawer}>
        <h2>
          Cart
          <img src="/images/ico-remove.svg" width={32} height={32} alt="Close cart" />
        </h2>

        <div className={s.list}>
          <div className={s.item}>
            <img className={s.image} src="/images/sneakers/1.jpg" width={70} height={70} alt="" />

            <div className={s.title}>
              Mens Sneakers Nike Blazer Mid Suede
              <p><b>$200</b></p>
            </div>

            <button className={s.remove}>
              <img src="/images/ico-remove.svg" width={32} height={32} alt="Remove" />
            </button>
          </div>

          <div className={s.item}>
            <img className={s.image} src="/images/sneakers/1.jpg" width={70} height={70} alt="" />

            <div className={s.title}>
              Mens Sneakers Nike Blazer Mid Suede
              <p><b>$200</b></p>
            </div>

            <button className={s.remove}>
              <img src="/images/ico-remove.svg" width={32} height={32} alt="Remove" />
            </button>
          </div>
        </div>

        <ul className={s.total}>
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
  )
}

export default Drawer
