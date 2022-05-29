import { useState } from "react"
import s from "./Card.module.scss"

function Card({ id, title, price, imgUrl, onClickFavorite, onClickAdd, favorited = false }) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)

  const onClickPlus = () => {
    onClickAdd({ id, title, price, imgUrl })
    setIsAdded(!isAdded)
  }

  const onClickLike = () => {
    onClickFavorite({ id, title, price, imgUrl })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={s.card}>
      <div>
        <button
          className={s.favorite}
          onClick={onClickLike}
        >
          <img
            src={isFavorite ? "/images/ico-liked.svg" : "/images/ico-unliked.svg"}
            width={30}
            height={30}
            alt="Add to favorite"
          />
        </button>

        <img className={s.image} src={imgUrl} alt={title} />
      </div>

      <h5>{title}</h5>

      <div className={s.descr}>
        <div>
          <span>Price:</span>
          <p>${price}</p>
        </div>

        <button onClick={onClickPlus}>
          <img
            src={isAdded ? "/images/ico-added.svg" : "/images/ico-add.svg"}
            width={32}
            height={32}
            alt="Add to cart"
          />
        </button>
      </div>
    </div>
  )
}

export default Card
