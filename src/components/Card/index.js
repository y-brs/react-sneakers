import { useState } from "react"

import ContentLoader from 'react-content-loader';

import s from "./Card.module.scss"

function Card({
  id,
  title,
  price,
  imgUrl,
  onClickFavorite,
  onClickAdd,
  added = false,
  favorited = false,
  loading = false
}) {
  const [isAdded, setIsAdded] = useState(added)
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
      {loading ? (
        <ContentLoader
          speed={2}
          width={168}
          height={250}
          viewBox="0 0 168 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="168" height="152" />
          <rect x="0" y="169" rx="5" ry="5" width="168" height="16" />
          <rect x="0" y="189" rx="5" ry="5" width="120" height="16" />
          <rect x="1" y="222" rx="5" ry="5" width="80" height="32" />
          <rect x="136" y="222" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default Card
