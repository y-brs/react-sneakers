import { Link } from "react-router-dom"

function Empty({
  title,
  image,
  description
}) {
  return (
    <div className="emptyBox">
      <div className="empty">
        <img src={image} width={70} height={70} alt={title} />

        <h5>{title}</h5>

        <p>{description}</p>

        <Link to="/">
          <button className="button-green">
            Go back
            <img src="/images/ico-arrow.svg" width={14} height={12} alt="Go back" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Empty
