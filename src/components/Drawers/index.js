import { useState } from "react"
import { useCart } from "../../hooks/useCart"
import axios from "axios"
import Info from "../../pages/Info"

import s from "./Drawer.module.scss"

import { BASE_URL } from "../../App"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = useState(null)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)

      const { data } = await axios.post(`${BASE_URL}/orders`, {
        items: cartItems,
      })

      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(`${BASE_URL}/cart/` + item.id)
        await delay(1000)
      }
    } catch (error) {
      console.log("Error while create order!")
    }

    setIsLoading(false)
  }

  return (
    <div className={`${s.overlay} ${opened ? s.overlayVisible : ""}`}>
      <div className={`${s.drawer} ${opened ? s.drawerVisible : ""}`}>
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
                <b>${totalPrice}</b>
              </li>
              <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>${Math.round((totalPrice / 100) * 5)}</b>
              </li>
            </ul>

            <button
              disabled={isLoading}
              onClick={onClickOrder}
              className="button-green"
            >
              Place order
              <img src="/images/ico-arrow.svg" width={14} height={12} alt="Place order" />
            </button>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Thank you!" : "Cart is empty"}
            image={isOrderComplete ? "/images/complete.png" : "/images/empty.png"}
            description={
              isOrderComplete
                ? `Your order #${orderId} has been placed and will be delivered as soon as possible`
                : "Add at least one pair of sneakers to place an order."
            }
          />
        )}

      </div>
    </div>
  )
}

export default Drawer
