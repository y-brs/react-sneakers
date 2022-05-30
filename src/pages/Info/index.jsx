import { useContext } from "react"
import { AppContext } from "../../App"

import s from "./Info.module.scss"

function Info({
  title,
  image,
  description
}) {
  const { setCartOpened } = useContext(AppContext)

  return (
    <div className={s.empty}>
      <img src={image} height={120} alt={title} />

      <strong>{title}</strong>

      <p>{description}</p>

      <button
        onClick={() => setCartOpened(false)}
        className="button-green"
      >
        Close cart
        <img src="/images/ico-arrow.svg" width={14} height={12} alt="Close cart" />
      </button>
    </div>
  )
}

export default Info
