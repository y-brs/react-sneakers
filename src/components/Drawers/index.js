import s from "./Drawer.module.scss"

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={s.overlay}>
      <div className={s.drawer}>
        <h2>
          Cart
          <img onClick={onClose} src="/images/ico-remove.svg" width={32} height={32} alt="Close cart" />
        </h2>

        {items.length > 0 ? (
          <>
            <div className={s.list}>
              {items.map((obj) => (
                <div className={s.item} key={obj.id}>
                  <img className={s.image} src={obj.imgUrl} width={70} height={70} alt="" />

                  <div className={s.title}>
                    {obj.title}
                    <p><b>${obj.price}</b></p>
                  </div>

                  <button onClick={() => onRemove(obj.id)} className={s.remove}>
                    <img src="/images/ico-remove.svg" width={30} height={30} alt="Remove" />
                  </button>
                </div>
              ))}
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
          </>
        ) : (
          <div className={s.empty}>
            <img src="/images/empty.png" width={120} height={120} alt="Cart is empty" />
            <strong>Cart is empty</strong>
            <p>Add at least one pair <nobr>of sneakers</nobr> <nobr>to place</nobr> an order.</p>

            <button onClick={onClose} className="button-green">
              Close cart
              <img src="/images/ico-arrow.svg" width={14} height={12} alt="Close cart" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Drawer
