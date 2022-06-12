import { useContext } from "react"
import ContentLoader from 'react-content-loader';
import { AppContext } from "../../App"

import s from "./Card.module.scss"

function Card({
  id,
  title,
  imgUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false
}) {
  const { isItemAdded, isItemFavorite } = useContext(AppContext)

  const obj = { id, parentId: id, title, imgUrl, price }

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    onFavorite(obj)
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
            {onFavorite && (
              <button
                className={s.favorite}
                onClick={onClickFavorite}
              >
                <img
                  src={isItemFavorite(id) ? "/images/ico-liked.svg" : "/images/ico-unliked.svg"}
                  width={30}
                  height={30}
                  alt={isItemFavorite(id) ? "Remove from favorite" : "Add to favorite"}
                />
              </button>
            )}

            <img
              className={s.image}
              src={imgUrl}
              width={168}
              height={142}
              alt={title}
            />
          </div>

          <h5>{title}</h5>

          <div className={s.descr}>
            <div>
              <span>Price:</span>
              <p>${price}</p>
            </div>

            {onPlus &&
              <button onClick={onClickPlus}>
                <img
                  src={isItemAdded(id) ? "/images/ico-added.svg" : "/images/ico-add.svg"}
                  width={32}
                  height={32}
                  alt={isItemAdded(id) ? "Remove from cart" : "Add to cart"}
                />
              </button>
            }
          </div>
        </>
      )}
    </div>
  )
}

export default Card
