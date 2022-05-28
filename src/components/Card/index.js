import s from "./Card.module.scss"

function Card({ title, price, imgUrl}) {
  const onClickButton = () => {
    alert("Click +")
  }

  return (
    <div className={s.card}>
      <div>
        <button className={s.favorite}>
          <img src="/images/ico-unliked.svg " width={30} height={30} alt="Like" />
        </button>

        <img className={s.image} src={imgUrl} alt={title} />
      </div>

      <h5>{title}</h5>

      <div className={s.descr}>
        <div>
          <span>Price:</span>
          <p>${price}</p>
        </div>

        <button className={s.buy} onClick={onClickButton}>
          <img src="/images/ico-add.svg" width={32} height={32} alt="Add" />
        </button>
      </div>
    </div>
  )
}

export default Card
